import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default () => {
  [gasStops, setGasStops] = useState([]);

  const onRegionChangeComplete = async () => {
    const response = await fetch('https://af977e8f.ngrok.io/api/v1/gas_stops');
    const newGasStops = await response.json();
    setGasStops(newGasStops);
  }

  const onLongPress = async (e) => {
    alert(e.nativeEvent.coordinate.latitude);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} showsUserLocation={true} onLongPress={onLongPress} onRegionChangeComplete={onRegionChangeComplete}>
      {gasStops.map(gs => (
        <Marker
          coordinate={gs.latlng}
          title={gs.title}
          description={gs.description}
        />
      ))}
      </MapView>
      <Text>CheapFuelGH</Text>
       <MaterialCommunityicons name = 'gas-station' size ={70} color = 'red'/>;
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
