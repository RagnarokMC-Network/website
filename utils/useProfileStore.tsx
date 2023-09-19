import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: null,

  setGProfile: (profile: any) => set({ profile }),
}));
