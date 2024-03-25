import { useAuthStore } from '@/store/authStore';

import BreadcrumbContent from '@/components/atoms/BreadcrumbsContent';
import AuthDetails from '@/Authentication/AuthDetails';
import SignIn from '@/Authentication/SignIn';
import SignUp from '@/Authentication/SignUp';

export default function MyAccount() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <BreadcrumbContent />
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
