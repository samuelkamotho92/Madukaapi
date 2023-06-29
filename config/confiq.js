var confiq = {
    server:process.env.server,
    database:process.env.database,
    user:process.env.user,
    password:process.env.password,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: false,
      }    
}
module.exports = confiq;