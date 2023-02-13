const redis = require("redis");
// Connect to redis at 127.0.0.1 port 6379 no password.
const client = redis.createClient();

(async () => {
    await client.connect();
})();

console.log("Connecting to the Redis");

client.on("ready", () => {
    console.log("Connected!");
});

client.on("error", (err) => {
    console.log("Error in the Connection");
});

// export default client;