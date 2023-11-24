import React, {createContext, useContext, useState} from "react";
import { useAsyncError } from "react-router-dom";


const ResultContext = createContext()
const baseUrl ='https://google-api31.p.rapidapi.com'

export function ResultContextProvider({children}) {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("Juan Manuel Sanjurjo linkedin")


    const getResult = async( urlType, bodyQuery ) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${urlType}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'eaf5d25625msh26d470d5fe5f035p1bd51cjsn115c7c5c86ae',
                'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
              },
              body: JSON.stringify({
                "text": bodyQuery,
                "safesearch": "off",
                "timelimit": "",
                "region": "wt-wt",
                "max_results": 20
            })
        })
        const data = await response.json()

        setResults(data)
        setIsLoading(false)
    }


    return(
        <ResultContext.Provider value={{getResult, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export function useContextProvider() {
    return useContext(ResultContext)
} 

