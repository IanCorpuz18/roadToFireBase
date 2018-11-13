
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import PickLocation from '../../assets/components/PickLocation';
import PickImage from '../../assets/components/PickImage';
class TripScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {

    return (
      <ScrollView style={{ backgroundColor: 'white', width:"100%" }}>
      <View style={{ backgroundColor: 'white', width:"100%" }}>
        <Text style={{ fontSize: 40, color: '#2f4f4f', marginBottom: 15, fontWeight: 'bold' }}> TRIP </Text>

       <PickImage/>
        <PickLocation/>
      </View>
      <View>
        <Text> </Text>
          <TextInput  />
          
      </View>
        </ScrollView>
    );
  }
}
export default TripScreen;

