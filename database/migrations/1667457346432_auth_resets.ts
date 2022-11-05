import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "auth_resets";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("user_id").unsigned().references("users.id");
      table.string("password_reset_code", 255);
      table.string("email_reset_code", 255);
      table
        .dateTime("request_request_time", { useTz: true })
        .defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
