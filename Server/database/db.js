import pkg from 'pg'
const {Client} = pkg

const database = new Client({
    user:"postgres",
    host:"localhost",
    database:"mern_ecomm_store",
    password:"7489912878",
    port:5432,
})

try {
    await database.connect();
    console.log("connected to the database Successfully")
} catch (error) {
    console.error("data base connection field",error)
    process.exit(1)
}

export default database;