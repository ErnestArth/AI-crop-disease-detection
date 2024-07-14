import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import {
  CropType,
  DiseaseClass,
  DiseaseInfo,
  InputImage,
  ProcessedImage,
  TeachableMachinePrediction,
  TeachableMachinePredictions,
} from "./types";
import { getDiseaseInfo } from "./utils";

interface Prediction {
  diseaseClass: DiseaseClass;
  accuracy: string;
}

const processImageURIForTeachableMachineModel = (
  imageURI: string
): HTMLImageElement => {
  const imageElement = new Image();
  imageElement.setAttribute("src", imageURI);
  return imageElement;
};

const processImageURI = (imageURI: string): InputImage => {
  return processImageURIForTeachableMachineModel(imageURI);
};

const preprocess = (image: InputImage): ProcessedImage => {
  return image;
};

const loadTeachableMachineModel = async (cropType: CropType) => {
  const basePath = `/services/artefacts/${cropType}-model/`;
  const modelPath = basePath + "model.json";
  const metadataPath = basePath + "metadata.json";
  return await tmImage.load(modelPath, metadataPath);
};

const getBestTeachableMachinePrediction = (
  predictions: TeachableMachinePredictions
): TeachableMachinePrediction => {
  return predictions.sort((a, b) =>
    a.probability < b.probability ? -1 : a.probability == b.probability ? 0 : 1
  )[predictions.length - 1];
};

const processTeachableMachinePredictions = (
  predictions: TeachableMachinePredictions
) => {
  const bestPrediction = getBestTeachableMachinePrediction(predictions);
  return {
    diseaseClass: bestPrediction.className as DiseaseClass,
    accuracy: `${(bestPrediction.probability * 100).toFixed(2)} %`,
  };
};

const makePrediction = async (
  image: ProcessedImage,
  cropType: CropType
): Promise<Prediction> => {
  const model = await loadTeachableMachineModel(cropType);
  const modelPredictions = await model.predict(image);

  return processTeachableMachinePredictions(modelPredictions);
};

export const getPredictionResults = async (
  imageURI: string,
  cropType: CropType
) => {
  const inputImage = processImageURI(imageURI);

  const processedImage = preprocess(inputImage);

  const prediction = await makePrediction(processedImage, cropType);

  const diseaseInfo = getDiseaseInfo(prediction.diseaseClass, cropType);

  return {
    disease: diseaseInfo.name,
    accuracy: prediction.accuracy,
    diseaseDescription: diseaseInfo.description,
    suggestedTreatment: diseaseInfo.suggestedTreatment,
  };
};
