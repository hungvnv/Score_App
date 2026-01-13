import { create } from "zustand";

type User = {
  uid: string;
  isGuest?: boolean;
};

type AuthState = {
  user: User | null;
  login: (uid: string) => void;
  guestLogin: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  login: (uid) => set({ user: { uid } }),

  guestLogin: () =>
    set({
      user: { uid: "guest", isGuest: true }
    }),

  logout: () => set({ user: null })
}));
