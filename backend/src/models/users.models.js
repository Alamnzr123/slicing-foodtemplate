const db = require('../config/db')

const userModel= {
    selectAll: () => {
        //Gunakan promise
        return new Promise((resolve, reject) =>{
            db.query(`SELECT * FROM users`, (err, result) =>{
                if(err) {
                    reject(err)
                }
                resolve(result)
            });
        })
    }
}

module.exports = userModel;