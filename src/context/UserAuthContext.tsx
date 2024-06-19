"use client"

import {createContext, useContext , useState, Dispatch, SetStateAction, ReactNode} from 'react'

interface UserAuthContextProps {
    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>
    searchTerm : string
    setSearchTerm: Dispatch<SetStateAction<string>>
}

const UserAuthContext = createContext<UserAuthContextProps>({
    isLoading: false,
    setIsLoading: () => {},
    searchTerm: '',
    setSearchTerm: () => {}
})

export const UserAuthProvider = ({children}: {children: ReactNode}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>('')

    return (
        <UserAuthContext.Provider value={{isLoading, setIsLoading, searchTerm, setSearchTerm}}>
            {children}
        </UserAuthContext.Provider>
    )
}

export const useUserAuth = () => useContext(UserAuthContext)
