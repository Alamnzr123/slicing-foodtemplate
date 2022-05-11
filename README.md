# slicing-foodtemplate
Slicing Foodtemplate

## Installation
1. Clone the repo ```git clone https://github.com/Alamnzr123/slicing-foodtemplate/```
2. Run ```npm install``` to install the dependencies
3. Import database ```mama_recipe``` to your PostgreSQL ([Backup and Restore PostgreSQL](https://www.postgresql.org/docs/8.1/backup.html#BACKUP-DUMP-RESTORE))
4. Set the environment variables:
    - ```PORT``` : fill for set the API running port
    - ```HOST``` : fill with HOSTNAME in your postgreSQL configuration
    - ```USER``` : fill with USERNAME in your postgreSQL configuration
    - ```DB_NAME``` : fill with the DATABASE NAME or leave it filled with ```mama_recipe``` if you isn't rename the database
    - ```PASSWORD``` : fill with PASSWORD in your postgreSQL configuration
    - ```SERVER_PORT``` : fill with PORT in your postgreSQL configuration
    - ```JWT_SECRET``` : fill with JWT key configuration
5. Run with :
    - ```npm run start``` : if you want to run it in client mode (use ```node```) without auto restart on every changing code
    - ```npm run dev``` :  if you want to run it in developer mode (use ```nodemon```) every change and save it will auto restart
6. You are Ready to Go

## Table of contents
- [Features](#Features)
- [Commands](#Commands)
- [Environment Variables](#Environment-Variables)
- [Project Structure](#Project-Structure)
- [API Documentation](#API-Documentation)
- [Error Handling](#Error-Handling)
- [Validation](#Validation)
- [Authentication](#Authentication)
- [Authorization](#Authorization)
- [Linting](#Linting)
- [Documentation](#Documentation)
- [Contributing](#Contributing)
- [License](#License)
    
## Features
- **SQL database:** using [PostgreSQL](https://www.postgresql.org/)
- **API documentation:** with [Postman](https://www.postman.com/)
- **Dependency management:** with [NPM](https://www.npmjs.com/)
- **Environment variables:** using [dotenv](https://github.com/motdotla/dotenv)
- **Security:** set security HTTP headers using [helmet](https://helmetjs.github.io/)
- **Santizing:** sanitize request data against xss and query injection
- **CORS:** Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Hash Password:** using [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- **Linting:** with [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/)

## Commands
Running in client mode:
```
npm run start
```
Running in developer mode:
```
npm run dev
```
Testing:
```
npm run test
```
Linting:
```
npm run lint -- --fix
```

## Environment Variables
The environment variables can be found and modified in the ```.env``` file. They come with these default values:
```
# Port number
PORT=3001

# Setting PostgreSQL
PGHOST='YOUR HOST'
PGUSER='YOUR USERNAME'
PGDATABASE='YOUR DATABASE'
PGPASSWORD='YOUR PASSWORD'
PGPORT=5432

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
```

## Project Structure
```
|── Backend
   |── public          # Asset Public
   |── src             # Project source code
       |── config      # Configuration database
       |── controllers # Route controller
       |── helpers     # Helpers
       |── middleware  # Custom express middleware
       |── models      # Models
       |── router      # Routes
   |── .env            # Setup environment
   |── .eslintrc.json  # ESlint
   |── .gitignore      # File name for not uploaded on github
   ├── index.js        # App entry point
   |── mama_recipe.sql # Database
|── Frontend
   |── public          # Asset Public
   |── src             # Project source code
       |── Assets      # Image that store use multer
       |── Components  # Layouts
       |── Router      # Endpoint
   |── .gitignore      # File name for not uploaded on github
   |── .README.md      # For Readme In github
```
