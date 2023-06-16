/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PARSE_APPLICATION_ID: process.env.PARSE_APPLICATION_ID,
    PARSE_HOST_URL: process.env.PARSE_HOST_URL,
    PARSE_JAVASCRIPT_KEY: process.env.PARSE_JAVASCRIPT_KEY,
  },
}

module.exports = nextConfig
