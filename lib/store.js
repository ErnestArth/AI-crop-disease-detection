
import {create} from 'zustand';

const useStore = create((set) => ({
  imageUri: null,
  setImageUri: (uri) => set({ imageUri: uri }),
}));

export default useStore;
