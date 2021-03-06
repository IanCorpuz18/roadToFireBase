
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image
} from 'react-native';
import { connect } from 'react-redux'
import  MapView, { Marker } from 'react-native-maps'
import { explores } from '../../contentImages';
import Profile from '../contentScreens/profile';
class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
   
    return (
      <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 40, color: '#2f4f4f', marginBottom: 15, fontWeight: 'bold' }}> PROFILE </Text>

        <View >
        
        </View>
        <View style={{alignSelf:"center"}}>
        <Text>_______</Text>
        <Text>{this.props.placeName}</Text>
        <Text>_______</Text>
        </View>
        <View style={styles.placeholder}>
          <Image source={this.props.placeImage} style={styles.imageStyle} />
        </View>
        <Text>  </Text>
         <Text>  </Text>
         <Text>  </Text>
        <View  style={{width:"80%",alignSelf:"center"}}>
          <MapView
           
            
            region={this.props.focusedLocation}
            style={styles.map}>
             
          </MapView>
         <Text>  </Text>
         <Text>  </Text>
         <Text>  </Text>
        </View>
      </View>
      </ScrollView>
    );
  }

}


const mapStateToProps = state => {
  return {
    placeName: state.sharePlace.placeName,
    placeImage: state.sharePlace.placeImage,
    focusedLocation: state.sharePlace.focusedLocation
  }
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 250
},
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#d3d3d3',
    width: '80%',
    height: 150,
    alignSelf: 'center',

  },

  imageStyle: {
    width: "100%",
    height: 150
  }


});
export default connect(mapStateToProps)(ProfileScreen);