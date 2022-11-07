import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import Property from "./Property";

export default class PropertyPhoto extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public propertyId: number;
  @column()
  public userId: number;
  @column()
  public image: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Property)
  public property: BelongsTo<typeof Property>;
}
