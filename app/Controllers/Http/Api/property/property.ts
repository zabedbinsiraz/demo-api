import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post("/add-property", "Api/Property/PropertyController.addProperty");
  Route.post("/upload-media", "Api/Property/PropertyController.uploadMedia");
}).prefix("api/property");
