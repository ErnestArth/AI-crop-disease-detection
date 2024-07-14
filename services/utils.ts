import { CropType, DiseaseClass, DiseaseInfo } from "./types";
import PotatoDiseaseInfo from "./disease-info/potato.json";

export const getCropInfo = (cropType: CropType) => {
  switch (cropType) {
    case CropType.Potato:
      return PotatoDiseaseInfo;
  }
};

export const getDiseaseInfo = (
  diseaseClass: DiseaseClass,
  cropType: CropType
): DiseaseInfo => {
  const cropInfo = getCropInfo(cropType);

  if (cropInfo === undefined) {
    return {
      name: "",
      description: "",
      suggestedTreatment: "",
    };
  }

  return cropInfo[diseaseClass] as DiseaseInfo;
};
