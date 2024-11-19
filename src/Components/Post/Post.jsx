import { Link, useNavigate } from 'react-router-dom';
import '../Post/Post.css'
const Post = ({post}) => {
    const {title, id} = post;
    const  navigate = useNavigate();
    const handleAddShow = () => {
       navigate(`/post/${id}`)
    }
    return (
        <div className="post">
            <h3>ID : {id}</h3>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            <button onClick={handleAddShow}>Click Me Show Detail</button>
        </div>
    );
};

export default Post;