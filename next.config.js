
/**
 * @type { import("next").NextConfig }
 */

const config = {
    async redirects() {
        return [{
            source: "/login",
            destination: "/",
            permanent: false
        }]
    },

    images: {
        domains: ["i.ytimg.com"]
    }
}

module.exports = config