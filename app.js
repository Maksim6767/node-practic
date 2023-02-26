const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/api/products");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

app.listen(3000);

// const express = require("express");
// const app = express();

// app.get("/contacts", (req, res) => {
//     // console.log(req.url);
//     // console.log(req.method);
//     // console.log(req.headers);
//     res.send("<h2>Contacts page</h2>")
// })

// app.listen(3000, () => console.log("Server running"));

// const express = require("express");
// const products = require("./products");

// const app = express();

// app.get("/products", (req, res) => {
//     res.json({
//         status: "sucsess",
//         code: 200,
//         data: {
//             rezult: products
//         }
//     });
// })

// app.listen(3000);


// const express = require("express");
// const products = require("./products");
// const fs = require("fs/promises");
// const moment = require("moment");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// // app.use(async (req, res, next) => {
// //     const { method, url } = req;
// //     const date = moment().format("DD-MM-YYYY_hh:mm:ss");
// //     await fs.appendFile("server.log", `\n${method} ${url} ${date}`);
// //     next();
// // })

// // app.use((req, res, next) => {
// //     console.log("First middleware");
// //     next();
// // })
// // app.use((req, res, next) => {
// //     console.log("Second middleware");
// //     next();
// // })

// app.get("/products", (req, res) => {
//     res.json(products);
// })

// app.listen(3000);