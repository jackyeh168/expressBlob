module.exports = {
  apps: [{
    name: 'API',
    script: 'bin/www',
    watch: true,
    "log-date-format": "YYYY-MM-DD HH:mm Z",
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};