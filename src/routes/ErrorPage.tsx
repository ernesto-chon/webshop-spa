import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="grid place-items-center h-screen  bg-gradient-to-bl from-neutral-900 to-neutral-950 text-white">
      <div className="p-16 bg-gradient-to-tr from-neutral-900 to-neutral-950 text-center">
        {isRouteErrorResponse(error) ? (
          <>
            <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4">{error.status}</h1>
            <h1 className="text-xl md:text-3xl lg:text-4xl">{error.error && error.error.message}</h1>
          </>
        ) : (
          <h1 className="text-xl md:text-3xl lg:text-4xl">Something terrible has happened! 🫤</h1>
        )}
      </div>
    </div>
  );
}
