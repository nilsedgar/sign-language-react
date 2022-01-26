import { ACTION_SESSION_INIT, ACTION_SESSION_SET, sessionSetAction } from "../actions/sessionActions"

export const sessionMiddleware = ({dispatch}) => next => action => {
    next(action)

    if(action.type === ACTION_SESSION_INIT){
        const storedSession = localStorage.getItem('rcttst-ss')
        if(!storedSession){
            return
        }
        const session = JSON.parse(storedSession)
        dispatch(sessionSetAction(session))
    }

    if(action.type === ACTION_SESSION_SET) {
        localStorage.setItem("rcttst-ss", JSON.stringify(action.payload))
    }
}