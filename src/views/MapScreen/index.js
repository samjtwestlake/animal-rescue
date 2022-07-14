import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MapScreen = () => {
  const sanFranCoords = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={sanFranCoords}>
        <Marker coordinate={sanFranCoords} />
        <Circle
          center={{
            latitude: sanFranCoords.latitude,
            longitude: sanFranCoords.longitude,
          }}
          radius={100}
          strokeColor="red"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
