import React, { useContext, createContext } from "react";

export const AppContext = createContext(null)

export const defaultConfig = { isBlackTheme: false, lang: "en_us" }

export const AppContextProvider = ({ children }) => {
    const [state, setState] = React.useState(defaultConfig)
    const [user, setUser] = React.useState(null)

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

export function Context() {
    const { state } = useAppContext()
    const { isBlackTheme, lang } = state

    let theme = "white"
    if (isBlackTheme) theme = "black"

    const stateLang = require(`../../../public/assets/lang/${lang}.json`)

    return { theme, stateLang, isBlackTheme }
}

export default Context
