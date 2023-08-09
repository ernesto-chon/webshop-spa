import React, { useState, FormEvent } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';

const SignIn: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const { register, handleSubmit } = useForm();

  const signIn = (data: any) => { //TODO: change any
    const newUser = {email: data.userEmail, password: data.userPassword};
    signInWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredentials) => {
        console.log(userCredentials)
      })
      .catch((error) => {
        console.log(error)
      })
  };
  return (
    <div className="mt-5">
      <form
        className="grid grid-cols-1 gap-2"
        onSubmit={handleSubmit((data) => {
          signIn(data);
        })}
      >
        <h1>Login to your account</h1>
        <input
          className="text-[#000]"
          type="email"
          placeholder="Enter your email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          {...register('userEmail')}
        ></input>
        <input
          className="text-[#000]"
          type="password"
          placeholder="Enter your password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          {...register('userPassword')}
        ></input>
        <button
          type="submit"
          className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
