import { UserContext } from "../contexts/UserContext"
import request from "../utils/request"
import {useContext, useEffect} from "react"

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () => {
    const login = async (email, password) => {
        return await request.post(`${baseUrl}/login`, {email, password})
    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (email, password) => {
        return request.post(`${baseUrl}/register`, {email, password})
    } 

    return {
        register,
    }
}

export const useLogout = () => {
    const {accessToken, userLogoutHandler} = useContext(UserContext);

    useEffect (() => {

        if (!accessToken) {
           return; 
        }

        request.get(`${baseUrl}/logout`, null, {headers: { 'X-Authorization': accessToken}})
            .then(userLogoutHandler);

    }, [accessToken, userLogoutHandler])

    return {
        isLoggedOut: !!accessToken,
    }
}