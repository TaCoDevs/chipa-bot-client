import React, { useContext, createContext, useState, useEffect, useMemo } from "react";

// Context
const AppContext = createContext(null)

export const AppContextProvider = ({children}) => {
    const [state, setState] = useState(false)

    useEffect(() => {}, [])

    const values = useMemo(() => {})
}