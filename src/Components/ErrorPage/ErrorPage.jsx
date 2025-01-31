import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Eroor website</h1>
            <p>{error.starusText || error.message}</p>
            {
             error.status === 404 && <div>
                <h3>Page not Found</h3>
                <p>Go back where you from</p>
                <Link to="/"><button>Home</button></Link>
             </div>
            }
        </div>
    );
};

export default ErrorPage;