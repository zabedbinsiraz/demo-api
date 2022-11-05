import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "inboxes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("property_id").unsigned().references("properties.id");
      table.boolean("is_sent").defaultTo(true);
      table.string("inbox_key", 255);
      table.integer("msg_counter");
      table.integer("user_id").unsigned().references("users.id");
      table.integer("buddy_id").unsigned().references("users.id");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true }).defaultTo(this.now());
      table.timestamp("updated_at", { useTz: true }).defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
