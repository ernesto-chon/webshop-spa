import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';

import { auth } from '@/firebase';

const SignIn: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const { register, handleSubmit } = useForm();

  const signIn = (data: any) => {
    //TODO: change any
    // e.preventDefault();
    const newUser = { email: data.userEmail, password: data.userPassword };
    signInWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Login to your account</h2>
      <form
        className="mt-2 grid grid-cols-1 gap-2 rounded border p-5"
        onSubmit={handleSubmit((data) => {
          signIn(data);
        })}
      >
        <input
          className="m-1 rounded border p-1 text-[#000]"
          type="email"
          placeholder="Enter your email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          {...register('userEmail')}
        />
        <input
          className="m-1 rounded border p-1 text-[#000]"
          type="password"
          placeholder="Enter your password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          {...register('userPassword')}
        />
        <button
          type="submit"
          className="w-30 place-self-center rounded border border-blue-500 bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-transparent"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
