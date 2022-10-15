
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
    }
}

module.exports = config