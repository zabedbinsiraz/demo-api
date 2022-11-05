import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "property_contacts";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("property_id").unsigned().references("properties.id");
      table.string("name", 255);
      table.string("email", 255);
      table.string("phone", 255);
      table.string("language_one", 255);
      table.string("language_two", 255);
      table.string("language_three", 255);
      table.string("language_four", 255);
      table.boolean("is_used_different").defaultTo(true);
      table.boolean("hide_phone").defaultTo(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
