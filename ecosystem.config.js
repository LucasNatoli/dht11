module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    {
      name      : 'serial-port-reader',
      script    : 'serial-port-reader.js',
      env: {
        SERIAL_PORT: '/dev/ttyACM0'
      },
      env_production : {
        NODE_ENV: 'production',
        SERIAL_PORT: '/dev/ttyACM0'
      }
    },

    {
      name      : 'web-server',
      script    : 'web-server.js',
      watch     : true,
      ignore_watch : ["node_modules", "docs", ".sqlite3", ".git", "test", "pwa"],
      instance_var: 'INSTANCE_ID',
      env: {
        PORT    : 3000,
        DBUSER  : 'cultibox',
        DBPASSWORD: 'cultibox',
        DBNAME: 'cultibox',
        NODE_ENV: "development"
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 80
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
