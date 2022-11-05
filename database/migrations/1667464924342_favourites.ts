import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "favourites";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("user_id").unsigned().references("users.id");
      table.integer("property_id").unsigned().references("properties.id");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
