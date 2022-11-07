import PropertyQuery from "./PropertyQuery";
export default class PropertyService {
  private propertyQuery: PropertyQuery;
  constructor() {
    this.propertyQuery = new PropertyQuery();
  }
  public async getExampleByLimit(ctx) {}
}
