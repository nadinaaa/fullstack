const app = require("./app");
const port = process.env.port || 5000;
const a = 6;

app.listen(port, () => console.log(`Server has been started on ${port} ${a}`));
