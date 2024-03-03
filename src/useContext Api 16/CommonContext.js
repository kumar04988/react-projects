import React, { useState } from 'react'
import HeaderContextCustomHook16 from './HeaderContextCustomHook16'
import Auth from './Auth'
// import { useUserContext } from './useUserContext/useUserContext'
import { useContext } from 'react'
import { userContext } from './useUserContext/useUserContext'
const CommonContext = () => {

    // const {user,logIn,logOut}=useUserContext()
    const USER = { username: "Guest", isGuestLogin: true }

    // const [user,setUser]=useState(USER)
    // const {user,logIn,logOut}=useContext(userContext)
    const [user, setUser] = useState(USER)

    const logIn = (username) => {
        console.log("came logIN")
        setUser({ username: username, isGuestLogin: false })
    }

    const logOut = () => {
        setUser(USER)
    }

    return (
        <div>
            <userContext.Provider value={{ user, logIn, logOut }}>
                <HeaderContextCustomHook16 />
                <Auth />
            </userContext.Provider>
        </div>
    )
}

export default CommonContext