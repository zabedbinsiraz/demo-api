import User from "App/Models/User";

export default class ExampleQuery {
  public async getUserByLimit(limit: number): Promise<User[]> {
    const user = User.query().limit(limit);
    return user;
  }
}
