import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "albums";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("user_id").unsigned().references("users.id");
      table.string("album_name", 255);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
