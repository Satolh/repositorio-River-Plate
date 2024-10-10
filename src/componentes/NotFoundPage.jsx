import { Link } from "react-router-dom";

export default function NotFoundPage () {
    return  <div className='div-error'>
         404 Not Found
        <Link to="/" className="button-home">Home</Link>
         </div>;
};