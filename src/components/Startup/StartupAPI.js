export const StartupAPI = {
    login(credentials) {
        return fetch('https://noroff-react-txt-forum-api.herokuapp.com/users/login',{
        method: "POST",    
        headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(async (response) => {
            if (!response.ok) {
                const {error = "An unknown error occurred"} = await response.json()
                throw new Error(error) //will force it into a catch
            }
            
            return response.json()
        })
    }
}