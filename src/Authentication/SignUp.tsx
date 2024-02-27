import React from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';

import { auth } from '@/firebase';

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const signUp = (data: any) => {
    const newUser = { email: data.userEmail, password: data.userPassword };
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-5">
      <h2>Create Account</h2>
      <form
        className="mt-2 grid grid-cols-1 gap-2 rounded border p-5"
        onSubmit={handleSubmit((data) => {
          signUp(data);
        })}
      >
        <input
          className="m-1 rounded border p-1 text-[#000]"
          type="email"
          placeholder="Enter your email"
          {...register('userEmail')}
        ></input>
        <input
          className="m-1 rounded border p-1 text-[#000]"
          type="password"
          placeholder="Enter your password"
          {...register('userPassword')}
        ></input>
        <button
          type="submit"
          className="w-30 place-self-center rounded border border-blue-500 bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-transparent"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
