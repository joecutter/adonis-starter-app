"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrganizationSchema extends Schema {
  up() {
    this.create("organizations", (table) => {
      table.increments();
      table.string("name");
      table.string("address");
      table.string("phone");
      table.timestamps();
    });
  }

  down() {
    this.drop("organizations");
  }
}

module.exports = OrganizationSchema;
