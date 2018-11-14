
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
class PickImage extends Component {


    state = {
        pickedImaged: null
      }
      pickImageHandler = () => {
        ImagePicker.showImagePicker({title: "Pick an Image"}, res => {
          if (res.didCancel) {
            console.log("User cancelled!");
          } else if (res.error) {
            console.log("Error", res.error);
          } else {
            this.setState({
              pickedImaged: { uri: res.uri }
            });
          console.log('pick image', this.state.pickedImaged)
        this.props.passImage(this.state.pickedImaged)
          }
        });
        
      }

      render() {

        return (

            
        <View >
          <View style={styles.placeholder}>
          <Image source={this.state.pickedImaged} style={styles.imageStyle} />
          </View>
          <Text> </Text>
          <View style={{alignSelf:"center", width:"50%"}}>
          <Button title="pick Image" onPress={this.pickImageHandler}/>
          </View>
        </View>
       
        );
    }

}


const styles = StyleSheet.create({

    placeholder: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#d3d3d3',
      width: '80%',
      height: 150,
      alignSelf: 'center',
  
    },
    
    imageStyle:{
      width:"100%",
      height:"100%"
    }
  });

  export default PickImage;