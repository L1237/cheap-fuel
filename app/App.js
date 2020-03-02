import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import{IonIcons,MaterialCommunityIcons}from '@expo/vector-icons';

export default function App() {
  const [gasStops, setGasStops] = useState([]);
  

  const handleOnRegionChangeComplete = async (e) => {
    console.log(e);
    const resp = await fetch(`http://localhost:3000/api/v1/gas_stops?latitude=${e.latitude}&longitude=${e.longitude}&latitudeDelta=${e.latitudeDelta}&longitudeDelta=${e.longitudeDelta}`);
    const newGasStops = await resp.json();
    setGasStops(newGasStops);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} followsUserLocation showsUserLocation onRegionChangeComplete={handleOnRegionChangeComplete}>
        {gasStops.map(gs => (
          <Marker key={gs.name} coordinate={gs.location} title={gs.name} />
        ))}
      </MapView>
      <MaterialCommunityIcons name='gas-station' size={50} color='red'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

function filterStations(station){
   for(let i =0; i<Config.types.length;i++){
     if(station [config.types[i]] <= 0 || config.showOpenOnly && !station.isOpen){
      return false;
    }
   }   return true;
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
              currency: '',
              byPrice: price,
              byDistance: stations
          };
      }
       module.exports = options => {
        config = options;
    
        return { getData };
     };
    




                          