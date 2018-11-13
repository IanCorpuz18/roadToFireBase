
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
import { explores } from '../../contentImages';
import Profile from '../contentScreens/profile'
class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  }
 
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 40, color: '#2f4f4f', marginBottom: 15, fontWeight: 'bold' }}> PROFILE </Text>

        <View >
      <Profile/>
        </View>
        <Text>_______</Text>
        <Text>{this.props.placeName}</Text>
        <Text>_______</Text>
      </View>
    );
  }
  
}

const mapStateToProps = state => {
  return {
      placeName: state.sharePlace.placeName,
    
  }
}

export default connect(mapStateToProps)(ProfileScreen);