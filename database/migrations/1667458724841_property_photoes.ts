import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "property_photoes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("propery_id").unsigned().references("properties.id");
      table.integer("user_id").unsigned().references("users.id");
      table.string("image", 255);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
