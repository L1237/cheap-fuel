import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'
import gql from 'graphql-tag'
import { useApolloClient } from '@apollo/react-hooks'

const MAP_QUERY = gql`
  query MapQuery($latitude: Float!, $longitude: Float!, $latitudeDelta: Float!, $longitudeDelta: Float!) {
    region(bounds: { latitude: $latitude, longitude: $longitude, latitudeDelta: $latitudeDelta, longitudeDelta: $longitudeDelta }) {
      stations {
        id
        name
        location {
            latitude
            longitude
        }
      }
    }
  }
`;

export default function Map() {
  const [gasStops, setGasStops] = useState([]);
  const client = useApolloClient();

  const handleOnRegionChangeComplete = async (e) => {
    console.log(e);
    response = await client.query({
        query: MAP_QUERY,
        variables: {
            latitude: e.latitude,
            longitude: e.longitude,
            latitudeDelta: e.latitudeDelta,
            longitudeDelta: e.longitudeDelta,
        },
    });

    setGasStops(response.data.region.stations);
  }

  return (
    <View style={styles.container}>
    <MapView style={styles.mapStyle} followsUserLocation showsUserLocation onRegionChangeComplete={handleOnRegionChangeComplete}>
        {gasStops.map(gs => (
        <Marker key={gs.name} coordinate={gs.location} title={gs.name} />
        ))}
    </MapView>
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
