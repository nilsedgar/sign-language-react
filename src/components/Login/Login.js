import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import AppContainer from "../../hoc/AppContainer"
import { loginAttemptAction } from "../../store/actions/loginActions"

const Login = () => {

    const dispatch = useDispatch()
    const {loginError, loginAttempting} = useSelector(state => state.loginReducer)
    const {loggedIn} = useSelector(state => state.sessionReducer)

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const onInputChange = event => {
        setCredentials({
            ...credentials,
            [event.target.id]: event.target.value
        })
    }

    const onFormSubmit = event => {
        event.preventDefault() //stop page reload
        dispatch(loginAttemptAction(credentials))
    }

    return (

        <>
            {loggedIn && <Navigate to="/timeline" />}
            { !loggedIn &&
        <AppContainer>
        <form onSubmit={onFormSubmit}>
            
            <h1>Login to app</h1>
            <p>Welcome to the app</p>

            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Enter your username" onChange={onInputChange}></input>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="*******" onChange={onInputChange}></input>
            </div>

            <button type="submit">Login</button>

            {loginAttempting &&
                <p>Trying to log in</p>
            }

            { loginError &&
                <p>{loginError}</p>
            }

        </form>
        </AppContainer>
        }
        </>
    )
}

export default Login