import PropertyQuery from "./PropertyQuery";
export default class PropertyService {
  private propertyQuery: PropertyQuery;
  constructor() {
    this.propertyQuery = new PropertyQuery();
  }
  public async getPropertyByLimit(ctx) {}

  public async propertyPostService(payload, ctx) {
    const propertyData = {
      propertyType: payload.propertyType,
      isSelling: payload.isSelling,
      alsoRentIt: payload.alsoRentIt,
      fromOwner: payload.fromOwner,
      isRenting: payload.isSelling,
      alsoSellIt: payload.alsoRentIt,
      price: payload.price,
      constructionsType: payload.constructionsType,
      homeType: payload.homeType,
      floorArea: payload.floorArea,
      halfRooms: payload.halfRooms,
      propertyAddress: payload.propertyAddress,
      lat: payload.lat,
      long: payload.long,
      thumbnailImage: payload.thumbnailImage,
      title: payload.title,
      slug: payload.slug,
      description: payload.description,
      commonCost: payload.commonCost,
      isStudioBedroom: payload.isStudioBedroom,
      bathrooms: payload.bathrooms,
      floor: payload.floor,
      view: payload.view,
      orientation: payload.orientation,
      conservationStatus: payload.conservationStatus,
      status: payload.status,
    };
    const createdProperty = await this.propertyQuery.postPropertyQuery(
      propertyData
    );

    const mediaData: any = [];

    payload.media.map(() => {
      const temp = {
        property_id: createdProperty,
      };
      mediaData.push(temp);
    });

    await this.propertyQuery.createPropertyMedia(mediaData);

    return createdProperty;
  }
}
