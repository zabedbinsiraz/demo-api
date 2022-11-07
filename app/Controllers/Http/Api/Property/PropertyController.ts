import Application from "@ioc:Adonis/Core/Application";

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { DateTime } from "luxon";
import PropertyService from "./PropertyServices";
import PropertyValidator from "./PropertyValidator";
export default class PropertyController {
  private propertyService: PropertyService;
  private propertyValidator: PropertyValidator;

  constructor() {
    this.propertyService = new PropertyService();
    this.propertyValidator = new PropertyValidator();
  }

  public async uploadMedia(ctx: HttpContextContract) {
    const media = ctx.request.file("file");
    if (media) {
      const dt = DateTime.now();
      const savingName = dt.toMillis() + "";

      const fileName = `${savingName}.${media.extname}`;
      // return Drive.getUrl("uploads")
      await media.move(await Application.publicPath("uploads"), {
        name: fileName,
      });

      let upFile = "http://localhost:3333/uploads/" + fileName;
      console.log("ext name", media.extname);
      return {
        link: upFile,
        name: fileName,
        type: media.extname == "image",
      };
    }
  }

  public async postProperty(ctx: HttpContextContract) {
    const payload = await this.propertyValidator.validatePostProperty(ctx);
    return await this.propertyService.propertyPostService(payload, ctx);
  }
}
