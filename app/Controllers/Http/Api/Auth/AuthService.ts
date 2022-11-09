import AuthQuery from "./AuthQuery";
export default class AuthService {
  private authQuery: AuthQuery;
  constructor() {
    this.authQuery = new AuthQuery();
  }
  public async getAuthByLimit(ctx) {
    const limit = ctx.request.all().limit;
  }

  public async register(data) {
    const user = await this.authQuery.register(data);
    return user;
  }

  public async userCheck(data) {
    const user = await this.authQuery.getUserByField("email", data.email);

    if (!user) {
      return "Invalid Email";
    }
    return false;
  }
}
