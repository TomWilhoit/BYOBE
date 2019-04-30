exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('volcanoes', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('size');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('eruptions', function(table) {
      table.increments('id').primary();
      table.string('date');
      table.string('damage');
      table.integer('volcanoes_id').unsigned()
      table.foreign('volcanoes_id')
        .references('volcanoes.id');
      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('volcanoes'),
    knex.schema.dropTable('eruptions')
  ]);
};
