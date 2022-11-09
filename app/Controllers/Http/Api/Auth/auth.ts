import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/register", "Api/Auth/AuthController.register");
  Route.post("/login", "Api/Auth/AuthController.login");
}).prefix("api/auth");
