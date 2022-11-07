import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/add-property", "Api/PRop/ChannelController.getAllChannelRequest");
}).prefix("api/property");
