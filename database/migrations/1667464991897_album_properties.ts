import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "album_properties";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("property_id").unsigned().references("properties.id");
      table.integer("album_id").unsigned().references("albums.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
