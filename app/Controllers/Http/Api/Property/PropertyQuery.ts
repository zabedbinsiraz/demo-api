import Property from "./../../../../Models/Property";
import PropertyPhoto from "./../../../../Models/PropertyPhoto";

export default class PropertyQuery {
  public async postPropertyQuery(data) {
    const feed = await Property.create(data);
    return feed.id;
  }

  public async createPropertyMedia(data) {
    console.log("media data", data);
    return await PropertyPhoto.createMany(data);
  }
}
