import app from "./src/libs/app";

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log("Server is running on port ", app.get("port"));
});
