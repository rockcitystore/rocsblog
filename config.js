
var path = require('path'),
    config;
config = {
    production: {
        url: 'http://rocs.aliapp.com/',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host     : 'rdsoaj9momkhsgxrihyze.mysql.rds.aliyuncs.com',
                port     : 3306,  
                user     : 'r2e6dq0rmcx71xpe',
                password : 'database01',
                database : 'r2e6dq0rmcx71xpe',
                charset  : 'utf8'
            },
            debug: false
        },

        server: {
          host: '0.0.0.0',
          port: '00'
        },

        storage: {
            active: 'local-file-store', 
            'local-file-store': {},  
     'qiniu-store': {
                AK: '06Zy224xF5fcYfhJ0qpveYKqonLzlqB9K2zfDS01 ',   
                SK: 'ZeOPOhJ6O02QBbhJsL_oqVRgfC8Wfg2HOxtCGUd0',    
                bucket: 'rockcitystore',          
                prefix: 'ghost',              
                domain: '7xj7qx.com1.z0.glb.clouddn.com',  
                protocol: 'http'   
            },
        }, 

        codeInjectionUI: true,
    },
    mail: {
        transport: 'SMTP',
        fromaddress: 'http://weibo.com/rockcitystore',
        options: {
            auth: {
                user: 'rcsblog@aliyun.com',
                pass: 'database01'
            }
        }
    },

    development: {
       
        url: 'http://localhost:2368',
 
 
        storage: {
            
            active: 'local-file-store',   
            'local-file-store': {},  

           
            'qiniu-store': {
                AK: '填写七牛云存储 AccessKey ',  
                SK: '填写七牛云存储 SecretKey',   
                bucket: '填写七牛云存储空间名称',             
                prefix: 'ghost',         
                domain: '填写空间域名',   
                protocol: 'http'   
            },
        }, 


        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
          
            host: '127.0.0.1',
           
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        },

        codeInjectionUI: true,
    },
 
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },
 
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

  
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};
 
module.exports = config;
