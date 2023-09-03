import { useAuthStore } from '@/store/authStore';

import AuthDetails from '@/components/Authentication/AuthDetails';
import SignIn from '@/components/Authentication/SignIn';
import SignUp from '@/components/Authentication/SignUp';

export default function MyAccount() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <AuthDetails />
      {!user.isLogged && (
        <>
          <SignIn />
          <SignUp />
        </>
      )}
    </>
  );
}
