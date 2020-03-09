import knex from 'knex'

import dbConfig from '../knexfile'

const db = knex(dbConfig);

export default {
  Query: {
    region: (value, args, context) => {
      return {
        ...args,
      };
    },
  },
  Mutation: {
    createRandomStation: async (value, args, context) => {
      await db.insert([{
        name: 'Yay',
        location_lat: 47.1,
        location_lng: 13.1,
      }]).into('stations');
      return true;
    },
  },
  Region: {
    stations: async (value, args, context) => {
      const stations = await db.from('stations').select('*');
      return stations;
    },
  },
  Station: {
    location: async (value, args, context) => {
      return {
        latitude: value.location_lat,
        longitude: value.location_lng,
      }
    }
  },
};