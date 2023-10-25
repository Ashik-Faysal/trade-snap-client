import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
        <div className="max-w-md mx-auto text-center"><h1 className="text-6xl text-red-500  my-8">404</h1>
          <p className="text-2xl font-semibold text-red-500 md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3  font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
  );
};

export default ErrorPage;
