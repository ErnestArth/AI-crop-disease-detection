export enum CropType {
  Potato = "potato",
  Tomato = "tomato",
}

export enum PotatoClasses {
  Potato___Early_blight = "Potato___Early_blight",
  Potato___healthy = "Potato___healthy",
  Potato___Late_blight = "Potato___Late_blight",
}

export type DiseaseClass = PotatoClasses;

export type InputImage = HTMLImageElement;

export type ProcessedImage = HTMLImageElement;

export type TeachableMachinePrediction = {
  className: string;
  probability: number;
};

export type TeachableMachinePredictions = TeachableMachinePrediction[];

export type DiseaseInfo = {
  name: string;
  description: string;
  suggestedTreatment: string;
};
