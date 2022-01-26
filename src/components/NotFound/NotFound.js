import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <main>
            <h4>You seem lost</h4>
            <p>This page does not exist</p>
            <Link to="/">Take me home</Link>
        </main>
    )
}

export default NotFound