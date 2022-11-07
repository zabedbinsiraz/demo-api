import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import PropertyPhoto from "./PropertyPhoto";

export default class Property extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public propertyType: string;

  @column()
  public isSelling: boolean;

  @column()
  public alsoRentIt: boolean;

  @column()
  public fromOwner: boolean;

  @column()
  public isRenting: boolean;

  @column()
  public alsoSellIt: boolean;

  @column()
  public price: number;

  @column()
  public constructionsType: string;

  @column()
  public homeType: string;

  @column()
  public floorArea: number;

  @column()
  public fullRooms: number;

  @column()
  public halfRooms: number;

  @column()
  public propertyAddress: string;

  @column()
  public lat: number;

  @column()
  public long: number;

  @column()
  public thumbnailImage: string;

  @column()
  public title: string;

  @column()
  public slug: string;

  @column()
  public description: string;

  @column()
  public commonCost: string;

  @column()
  public isStudioBedroom: boolean;

  @column()
  public bathrooms: number;

  @column()
  public floor: string;

  @column()
  public view: string;

  @column()
  public orientation: string;

  @column()
  public conservationStatus: string;

  @column()
  public status: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => PropertyPhoto)
  public property_photos: HasMany<typeof PropertyPhoto>;
}
