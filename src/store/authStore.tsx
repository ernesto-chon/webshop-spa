import { create } from 'zustand';
// import { useEffect } from 'react';
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../firebase';

interface AuthState {
  user: {
    email: string,
    password: string
  }
  // logIn: () => void,
  // logOut: () => void,
  // signIn: () => void,
  getUserDetails: () => void
}

const useAuthStore = create<AuthState>()((set) => ({
  user: {email: '', password: ''},
  getUserDetails: () => set(() => ({ user: {email: 'test', password: '12345'}})),
  }));

export default useAuthStore;