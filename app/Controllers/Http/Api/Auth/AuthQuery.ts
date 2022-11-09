import User from "App/Models/User";

export default class AuthQuery {
  async register(data) {
    return User.create(data);
  }

  public async getUserByField(field: string, value: string) {
    let a = await User.query().where(field, value).first();
    return a?.serialize();
  }
}
