//npm init
//npm i express

//basic server setup
import { express } from "express";

const app = express();
const PORT = 3000;

app.get(`/`, () => {
  res.send(`Hello Express`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
