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
async function getPricesFromApi(){
  try{
    let response = await fetch('https://www.globalpetrolprices.com/api_gpp.php?cnt=GH&ind=gp,dp,lp,kr&prd=latest&uid=1755&uidc=b75356ac1aad2360c3671a04c0744b46')
  let responseJson = await response.json();
  console.log(responseJson);
}
catch(error){
  console.error(error);
}
};
function filterStations(station) {
  for (let i = 0; i < Config.types.length; i++) {
    if (station[config.types[i]] <= 0 || config.showOpenOnly && !station.isOpen) {
      return false;
    }
  } return true;
}
function normalizeStations(value, index, stations) {
  stations[index].prices = {
    diesel: value.diesel,
    gasoline: value.gasoline,
    lpg: value.lpg,
    kerosene: value.kerosene,
  }
}
stations[index].distance = value.dist;
stations[index].address = `${`0${value.postCode}`.slice(-5)} ${
  value.place} - ${value.street} ${value.houseNumber}`;

async function getData() {
  const response = await fetch(generateUrl());
  const parsedResponse = await response.json();


  if (!parsedResponse.ok) {
    throw new Error('Error no fuel data');
  }

  const stations = parsedResponse.stations.filter(filterStations);

  stations.forEach(normalizeStations);

  const price = stations.slice(0);
  price.sort(sortByPrice);

  return {
    types: ['diesel', 'petrol', 'lpg'],
    unit: 'km',
    currency: 'Ghc',
    byPrice: price,
    byDistance: stations
  };
}
module.exports = options => {
  config = options;

  return { getData };
};
























