import React, { useContext, createContext } from "react";

export const AppContext = createContext(null)

export const defaultConfig = { isBlackTheme: false, lang: "en_us" }
export const defaultUser = { isLogin: false, el: null }

async function fetchUser(token, token_type) {
    const response = await fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${token_type} ${token}`
        }
    })

    const data = await response.json()
    return data
}

export const AppContextProvider = ({ children }) => {
    const [state, setState] = React.useState(defaultConfig)
    const [user, setUser] = React.useState(defaultUser)

    React.useEffect(() => {
        localStorage.setItem("defaultConfig", JSON.stringify(defaultConfig))

        const customConfig = JSON.parse(localStorage.getItem("customConfig"))
        customConfig && setState(customConfig)

        if (window.location.search) {
            const fragment = window.location.search.split("?")
            const token = fragment[1].replace("code=", "")
            const refresh = fragment[2].replace("refresh_token=", "")
            const type = fragment[3].replace("token_type=", "")

            sessionStorage.setItem("refresh", refresh)
            sessionStorage.setItem("type", type)

            async function getUser() {
                const user = await fetchUser(token, type)
                console.log(user)
                setUser({ isLogin: true, el: user })
            }

            getUser()
        } else setUser(defaultUser)
    }, [])

    const values = React.useMemo(() => (
        { state, setState, user, setUser }), [state, user])

    return <AppContext.Provider value={values} >{children}</AppContext.Provider>
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
