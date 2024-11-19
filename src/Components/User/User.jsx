import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {id, name, email, phone, website} = user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>E-mail: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;