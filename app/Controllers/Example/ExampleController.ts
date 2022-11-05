import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ExampleService from './ExampleService';
import ExampleValidator from './ExampleValidator';
export default class ExampleController {
  private exampleService : ExampleService
  private exampleValidator : ExampleValidator
  constructor () {
    this.exampleService =  new ExampleService()
    this.exampleValidator =  new ExampleValidator()
  }
  public async getExampleByLimit(ctx : HttpContextContract) {
    await this.exampleValidator.validateExampleSchema(ctx)
    return this.exampleService.getExampleByLimit(ctx)
  }
}
