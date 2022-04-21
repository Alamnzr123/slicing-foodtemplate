const db = require('../config/db')

const recipes= {
    selectAll: () => {
        //Gunakan promise
        return new Promise((resolve, reject) =>{
            db.query(`SELECT * FROM recipes`, (err, result) =>{
                if(err) {
                    reject(err)
                }
                resolve(result)
            });
        })
    }
}

module.exports = recipes;