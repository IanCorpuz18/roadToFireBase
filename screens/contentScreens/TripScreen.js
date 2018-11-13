
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
import { addPlace } from '../../redux/actions/sharePlace';
import { connect } from 'react-redux'
import CustomButton from '../../assets/components/customButton';
class TripScreen extends Component {

  static navigationOptions = {
    header: null
  }
  state = {
    placeName: ""
  }
  changePlaceName = (val) => {
    this.setState({
      placeName: val
    })
  }
  shareButton = () => {
    console.log('button Clicked')
    this.props.addPlaceName(this.state.placeName)
    
  }
  render() {

    return (
      <View style={{ flex:1, width: "100%" }}>
      <ScrollView style={{ backgroundColor: 'white', width: "100%" }}>
        <View style={{ backgroundColor: 'white', width: "100%" }}>
          <Text style={{ fontSize: 40, color: '#2f4f4f', marginBottom: 15, fontWeight: 'bold' }}> TRIP </Text>

          <PickImage />
          <Text> </Text>
          <PickLocation />
        </View>
        <View>
          <Text> </Text>
          <TextInput placeholder="Place Name" underlineColorAndroid='red'
            value={this.state.placeName}
            onChangeText={val => this.changePlaceName(val)} />
          <Text> </Text>
          <View style={{ alignSelf: "center", width: "50%" }}>
            
          
          </View>
          
        </View>
        
      </ScrollView>
      <CustomButton onPress={this.shareButton}> asd</CustomButton>
      </View>
      
    );
  }
  componentDidUpdate(){
    console.log("screen is updated")
  }


}

const mapDispatchToProps = dispatch => {
  return {
    addPlaceName: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(TripScreen);

 