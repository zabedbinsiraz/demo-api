import ExampleQuery from './ExampleQuery';
export default class ExampleService {
    private exampleQuery : ExampleQuery
    constructor(){
      this.exampleQuery = new ExampleQuery
    }
    public async getExampleByLimit(ctx){
      const limit = ctx.request.all().limit
      const user = await this.exampleQuery.getUserByLimit(limit)
      return user
   }
};
