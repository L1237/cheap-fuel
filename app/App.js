function filterStations(station){
  for(let i =0; i<Config.types.length;i++){
    if(station [config.types[i]] <= 0 || config.showOpenOnly && !station.isOpen){
      return false;
    }
  }
  return true;
}
function normalizeStations(value, index,stations){
  stations[index].prices ={
    diesel: value.diesel,
    petrol: value.petrol,
    lpg: value.lpg,
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
              currency: 'ghc',
              byPrice: price,
              byDistance: stations
          };
      }
      module.exports = options => {
        config = options;
    
        return { getData };
    };
    




