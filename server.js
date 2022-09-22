const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// TODO nextがnot definedになる件を対応する
server.use(jsonServer.bodyParser);
// server.use((req, next) => {
//   if (req.method === "POST") {
//     req.method = "GET";
//   }
//   console.log(req.body);
//   next();
// });

server.use(
  jsonServer.rewriter({
    "/api/articles": "/articles",
    "/api/profile": "/profile",
    "/api/posts": "/posts",
  })
);

// listen port
server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
