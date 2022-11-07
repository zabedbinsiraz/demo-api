import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "properties";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("property_type", 255);
      table.boolean("is_selling").defaultTo(true);
      table.boolean("also_rent_it").defaultTo(true);
      table.boolean("from_owner").defaultTo(true);
      table.boolean("is_renting").defaultTo(true);
      table.boolean("also_sell_it").defaultTo(true);
      table.decimal("price");
      table.string("constructions_type");
      table.string("home_type");
      table.integer("floor_area");
      table.integer("full_rooms");
      table.integer("half_rooms");
      table.string("property_address", 255);
      table.decimal("lat");
      table.decimal("long");
      table.string("thumbnail_image", 255);
      table.string("title", 255);
      table.string("slug", 255);
      table.text("description");
      table.string("common_cost", 255);
      table.boolean("is_studio_bedroom");
      table.integer("bathrooms");
      table.string("floor", 255);
      table.string("view", 255);
      table.string("orientation", 255);
      table.string("conservation_status", 255);
      table.string("status", 255);

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
