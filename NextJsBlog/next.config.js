/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER }= require('next/constants')
const nextConfig = (phase) => {
  if ( phase === PHASE_DEVELOPMENT_SERVER){
    return{
      env: {
        mongodb_username: 'mphomakgwe4',
        mongodb_password: 'CwjXciRRspzKhWQZ',
        mongodb_clustername: 'nextjsexploring',
        mongodb_database: 'contact_details-dev',
      },
    };
  };
  return{
    reactStrictMode: true,
  env: {
    mongodb_username: 'mphomakgwe4',
    mongodb_password: 'CwjXciRRspzKhWQZ',
    mongodb_clustername: 'nextjsexploring',
    mongodb_database: 'contact_details-cleints',
  },
  }
}

module.exports = nextConfig
