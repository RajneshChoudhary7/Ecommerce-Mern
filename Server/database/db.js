import pkg from 'pg'
const {Client} = pkg

const database = new Client({
    user:"postgres",
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:"7489912878",
    port:process.env.DB_PORT,
})

try {
    await database.connect();
    console.log("connected to the database Successfully")
} catch (error) {
    console.error("data base connection field",error)
    process.exit(1)
}

export default database;