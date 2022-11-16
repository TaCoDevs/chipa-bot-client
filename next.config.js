
/**
 * @type { import("next").NextConfig }
 */

const config = {
    async redirects() {
        return [{
            source: "/login",
            destination: "https://discord.com/api/oauth2/authorize?client_id=725499270077087894&redirect_uri=http%3A%2F%2F26.89.117.213%3A3000&response_type=code&scope=identify",
            permanent: false
        }]
    },

    images: {
        domains: ["i.ytimg.com"]
    }
}

module.exports = config