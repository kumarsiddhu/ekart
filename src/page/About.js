//  import Header from "../component/Header";
import { Link } from "react-router-dom";
export default  function About() {
    return (
        <div>
            <h2>Who are We?</h2>
            <p>
                That is good
            </p>
             <nav>
             <Link to="/contact" >Contact</Link>
             </nav>
        </div>
    )
}