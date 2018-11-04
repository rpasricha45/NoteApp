import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {text:""}



  }


  handleChangeText = (typedText) =>{
    this.setState({text:typedText})
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! {this.state.text}</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder = "Type your text here"
        onChangeText={this.handleChangeText}


        value={this.state.text}

      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
