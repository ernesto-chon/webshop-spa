import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import AuthDetails from "../components/Authentication/AuthDetails";

import Button from '../components/atoms/Button';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-6xl">ernesto-chon</h1>
      <SignIn/>
      <SignUp/>
      <AuthDetails/>

      <Button onClick={() => alert('Hey')}>Hello button</Button>
    </>
  );
}
