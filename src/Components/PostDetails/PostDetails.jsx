import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../PostDetails/PostDetails.css"
const PostDetails = () => {
   const post = useLoaderData();
   const params = useParams();
   const navigate = useNavigate();
   const  {id, body, title} = post;

   console.log(params);

   const handleAddGo = () => {
       navigate(-1);
   }
    return (
        <div className="postdetails">
            <h3>Post Title : {title}</h3>
            <p>ID : {id}</p>
            <p><small>Post Body: {body}</small></p>
            <button onClick={handleAddGo}>Go Back</button>
        </div>
    );
};

export default PostDetails;