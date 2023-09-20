import { create } from "zustand";

export const useProfileStore = create((set) => ({
  globals: {
    PRODUCTION_MODE: "dev",
    THEME: "",
  },

  setGlobals: (globals: any) => set({ globals }),
}));
