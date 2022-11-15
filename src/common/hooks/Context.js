import React, { useContext, createContext } from "react";

export const AppContext = createContext(null)

export const defaultConfig = { isBlackTheme: false, lang: "en_us" }

export const AppContextProvider = ({ children }) => {
    const [state, setState] = React.useState(defaultConfig)

    React.useEffect(() => {
        localStorage.setItem("defaultConfig", JSON.stringify(defaultConfig))
        const customConfig = JSON.parse(localStorage.getItem("customConfig"))

        if (customConfig) {
            setState(customConfig)
        }
    }, [])

    const values = React.useMemo(() => (
        { state, setState }), [state])

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export function useAppContext() {
    const context = useContext(AppContext)

    if (!context) {
        console.log("Error deploying App Context!!!")
    }

    return context
}

export default useAppContext
