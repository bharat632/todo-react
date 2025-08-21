const app = require("./index");
const { connection } = require("./util/database");

const PORT = process.env.PORT || 4242;

const startServer = async () => {   
    await connection();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer().catch((error) => {    
    console.error("Error starting the server:");
    process.exit(1); // Exit the process with a failure code
})
