import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import AuthService from "./AuthService";
import AuthValidator from "./AuthValidator";
export default class AuthController {
  private authService: AuthService;
  private authValidator: AuthValidator;
  constructor() {
    this.authService = new AuthService();
    this.authValidator = new AuthValidator();
  }

  public async getAuthByLimit(ctx: HttpContextContract) {
    await this.authValidator.validateAuthSchema(ctx);
    return this.authService.getAuthByLimit(ctx);
  }

  public async register(ctx: HttpContextContract) {
    try {
      const payload: any = await this.authValidator.validateSignupSchema(ctx);

      return this.authService.register(payload);
    } catch (error) {
      return ctx.response.status(422).send(error.messages);
    }
  }

  public async login(ctx: HttpContextContract) {
    let validatedData = await this.authValidator.validateLoginSchema(ctx);
    let check = await this.authService.userCheck(validatedData);
    if (check) {
      return ctx.response.status(400).send({ msg: check });
    }
    try {
      const user = await ctx.auth
        .use("web")
        .attempt(validatedData.email, validatedData.password);
      return user;
    } catch (error) {
      if (error.messages) {
        return ctx.response.status(422).send(error.messages);
      } else {
        console.log("invalid cred");
        return ctx.response.status(400).send({ msg: "Invalid credentials" });
      }
    }
  }
}
