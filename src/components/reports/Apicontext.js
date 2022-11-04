import React, { Fragment, useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios'

const APIContext = createContext();

export function APIContextProvider ({children}) {
    const [reportsData, setReportsData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const { data } = await axios.get(`http://localhost:8000/report`);
        setReportsData(data);
      }
      fetchData();


    }, []);
    return (
        <Fragment>
                <Fragment>
                     <APIContext.Provider value={{reportsData}}>
                        {children}
                     </APIContext.Provider>
                </Fragment>
        </Fragment>
    )
}
export function useAPI() {
    const context = useContext(APIContext);
    if(context === undefined) {
        throw new Error("Context");

    }
    return context;
}
