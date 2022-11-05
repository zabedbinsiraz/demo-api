import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "property_extras";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("property_id").unsigned().references("properties.id");
      table.string("name", 255);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
