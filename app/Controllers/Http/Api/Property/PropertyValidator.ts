import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
export default class PropertyValidator {
  // public async validateExampleSchema(ctx: HttpContextContract) {
  //   const limitUserSchema = schema.create({
  //     limit: schema.number(),
  //   });
  //   const msg = {
  //     "limit.required": "Limit is required",
  //     "limit.number": "Limit must be a number",
  //   };
  //   try {
  //     const payload = await ctx.request.validate({
  //       schema: limitUserSchema,
  //       messages: msg,
  //     });
  //     return payload;
  //   } catch (error) {
  //     return ctx.response.status(422).send(error.messages);
  //   }
  // }

  public async validatePostProperty(ctx: HttpContextContract) {
    const propertySchema = schema.create({
      propertyType: schema.string(),
      isSelling: schema.boolean(),
      alsoRentIt: schema.boolean(),
      fromOwner: schema.boolean(),
      isRenting: schema.boolean(),
      alsoSellIt: schema.boolean(),
      price: schema.number(),
      constructionsType: schema.string(),
      homeType: schema.string(),
      floorArea: schema.number(),
      halfRooms: schema.number(),
      propertyAddress: schema.string(),
      lat: schema.number(),
      long: schema.number(),
      thumbnailImage: schema.string(),
      title: schema.string(),
      slug: schema.string(),
      description: schema.string(),
      commonCost: schema.string(),
      isStudioBedroom: schema.boolean(),
      bathrooms: schema.number(),
      floor: schema.string(),
      view: schema.string(),
      orientation: schema.string(),
      conservationStatus: schema.string(),
      status: schema.string(),
      property_photos: schema.array.optional().members(schema.string()),
    });
    return await ctx.request.validate({ schema: propertySchema });
  }
}
