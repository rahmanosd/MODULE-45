import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user
    return (
        <div>
            <h3>User-Name : {name}</h3>
            <p>WebSite: {website}</p>
        </div>
    );
};

export default UserDetails;