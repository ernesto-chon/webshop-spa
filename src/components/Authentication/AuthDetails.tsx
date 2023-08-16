import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { shallow } from 'zustand/shallow';
import { UserInterface, useAuthStore } from '../../store/authStore';
import { auth } from '../../firebase';

const AuthDetails: React.FC = () => {
  console.log('Auth is running'); //FIX: Check how many times this component is rendered.
  const [user, setUserDetails] = useAuthStore((state) => [state.user, state.setUserDetails], shallow);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        const newUser: UserInterface = { email: user.email || '', isLogged: true };
        setUserDetails(newUser);
      } else {
        const newUser: UserInterface = { email: '', isLogged: false };
        setUserDetails(newUser);
      }
    });

    //this return listens one more time for any changes on the auth object from firebase
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      {user.isLogged ? (
        <>
          <h2>Welcome: {user.email}</h2>
          <button
            className="mt-3 place-self-center w-30 rounded border border-blue-500 bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-transparent"
            onClick={userSignOut}
          >
            Sign out
          </button>
        </>
      ) : (
        <h3>Please sign in with your account or create one</h3>
      )}
    </div>
  );
};

export default AuthDetails;
