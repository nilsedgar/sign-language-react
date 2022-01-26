import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import AppContainer from "../../hoc/AppContainer"
import { loginAttemptAction } from "../../store/actions/loginActions"

const Startup = () => {

    const [credentials, setCredentials] = useState({
        username: ""
    })

    const onInputChange = event => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        })
    }

    return (

        <AppContainer>
            
            <h1>Login to app</h1>
            <p>Welcome to the app</p>

            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Enter your username" onChange={onInputChange}></input>
            </div>

            <Link to="/translation">Go to translation page</Link>

        </AppContainer>
    )
}

export default Startup