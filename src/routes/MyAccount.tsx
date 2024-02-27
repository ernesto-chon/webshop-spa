import { useAuthStore } from '@/store/authStore';

import BreadcrumsContent from '@/components/atoms/BreadcrumsContent';
import AuthDetails from '@/components/Authentication/AuthDetails';
import SignIn from '@/components/Authentication/SignIn';
import SignUp from '@/components/Authentication/SignUp';

export default function MyAccount() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <BreadcrumsContent />
      <div className="content-section">
        <AuthDetails />
        {!user.isLogged && (
          <>
            <SignIn />
            <SignUp />
          </>
        )}
      </div>
    </>
  );
}
