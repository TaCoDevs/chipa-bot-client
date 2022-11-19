
/**
 * @type { import("next").NextConfig }
 */

const config = {
    async redirects() {
        return [{
            source: "/login",
            destination: "http://26.89.117.213:4000/login",
            permanent: false
        }]
    },

    images: {
        domains: ["i.ytimg.com"]
    }
}

module.exports = config