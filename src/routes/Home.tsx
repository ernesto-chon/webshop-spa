import SignIn from '../components/Authentication/SignIn';
import SignUp from '../components/Authentication/SignUp';
import AuthDetails from '../components/Authentication/AuthDetails';
import useAuthStore from '../store/authStore'
import Button from '../components/atoms/Button';

export default function Home() {
  const [user, getUserDetails] = useAuthStore(
    (state) => [state.user, state.getUserDetails],
    // shallow
  )

  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-6xl">ernesto-chon</h1>
      <SignIn />
      <SignUp />
      <AuthDetails />
      <Button>Hello button</Button>
      <h3>User email: {user.email}</h3>
      <button className="d-btn rounded-sm  bg-primary" onClick={() => getUserDetails()}>Get User Details</button>
    </>
  );
}
