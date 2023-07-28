import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="my-24 mx-auto w-fit">
      <h1 className="text-4xl text-center font-semibold">Error</h1>
      <p className="text-2xl my-2 text-center">
        There was an error during page loading
      </p>
      <p className={"text-center text-2xl"}>
        Return to the{" "}
        <Link className={"text-blue-600"} to="/">
          home page
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
