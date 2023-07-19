import React, { useState, FormEvent } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (e: FormEvent) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="mt-5">
      <form className="grid grid-cols-1 gap-2 border-white" onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          className="text-[#000]"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="text-[#000]"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          type="submit"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignIn
