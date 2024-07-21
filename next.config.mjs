/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,  
    },
    
};
// consider for variables .env .env.local  

export default nextConfig;
