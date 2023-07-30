import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container mx-auto text-center my-16">
      <h1 className="text-4xl font-semibold">404</h1>
      <h2 className="text-4xl font-semibold">NotFound</h2>
      <p className="text-3xl"> There is no page with such url</p>
      <Link to="/" className="text-2xl text-blue-700">
        Return to the home page
      </Link>
    </div>
  );
};

export default NotFound;
