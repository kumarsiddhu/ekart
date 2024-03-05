// /import Header from "../component/Header";
import { Link } from "react-router-dom"
export default  function Home() {
    return (
        <div>
            <main>
                <h2>Welcome to home page</h2>
                <p>you can do these, i belive in you </p>
            </main>
             
             <nav>
                <Link to="/" >Nopage</Link>
             </nav>

            </div>
 
    )
}