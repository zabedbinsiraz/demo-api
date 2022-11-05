import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "user_profiles";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("user_id").unsigned().references("users.id");
      table.string("language_one", 255);
      table.string("language_two", 255);
      table.string("language_three", 255);
      table.string("language_four", 255);
      table.string("preferred_currency", 20);
      table.string("phone", 20);
      table.string("phone_two", 20);
      table.boolean("hide_phone").defaultTo(true);
      table.boolean("get_news").defaultTo(true);
      table.boolean("get_blog_news").defaultTo(true);
      table.boolean("get_offer_and_promotion").defaultTo(true);
      table.boolean("external_service_info").defaultTo(true);
      table.boolean("offers_for_ads").defaultTo(true);
      table.boolean("ads_basedon_profile").defaultTo(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
