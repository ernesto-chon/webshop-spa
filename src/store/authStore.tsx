import { create } from 'zustand';

export interface UserInterface {
  email: string;
  isLogged: boolean;
  // password: string;
}

interface AuthState {
  user: UserInterface;
  setUserDetails: (obj: UserInterface) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: { email: '', isLogged: false },
  setUserDetails: (obj) => set({ user: obj }),
}));

