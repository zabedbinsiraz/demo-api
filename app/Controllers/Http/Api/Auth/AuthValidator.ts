import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
export default class AuthValidator {
  public async validateAuthSchema(ctx: HttpContextContract) {
    const limitUserSchema = schema.create({
      limit: schema.number(),
    });
    const msg = {
      "limit.required": "Limit is required",
      "limit.number": "Limit must be a number",
    };
    try {
      const payload = await ctx.request.validate({
        schema: limitUserSchema,
        messages: msg,
      });
      return payload;
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }

  public async validateSignupSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      email: schema.string({}, [
        rules.email(),
        rules.unique({ table: "users", column: "email" }),
      ]),
      full_name: schema.string.optional({
        escape: true,
        trim: true,
      }),

      password: schema.string({ escape: true, trim: true }, [
        rules.minLength(6),
        rules.maxLength(16),
        rules.confirmed(),
      ]),
      is_agency: schema.boolean(),
      is_email_verified: schema.boolean(),
      custom_fields: schema.array.optional().anyMembers(),
    });
    const msg = {
      "email.required": "Email is required",
      "email.unique": "Email is already in use",
      "email.email": "Invalid email address",
      "password.required": "Password is required",
      "password.minLength": "Password must be at least 6 characters long",
      "password.maxLength":
        "Password must be at less or equal 16 characters long",
      "password_confirmation.confirmed":
        "Password and confirm password doesn't match",
    };
    return await ctx.request.validate({ schema: userSchema, messages: msg });
  }

  public async validateLoginSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      email: schema.string({ trim: true }),
      password: schema.string({ trim: true }),
    });
    const msg = {
      "email.required": "Email is required",
      "password.required": "Password is required",
    };
    return ctx.request.validate({ schema: userSchema, messages: msg });
  }
}
