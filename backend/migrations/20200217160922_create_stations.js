export const up = async (db) => {
    await db.schema.createTable('stations', (table) => {
        table.increments('id')
        table.string('name')
        table.float('location_lat')
        table.float('location_lng')
      });
};

export const down = async (db) => {
  await db.schema.dropTable('stations');
};
