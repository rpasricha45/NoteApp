import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.testHeader}>
            <Header
                centerComponent={{text: 'What Up Bitch', style:{color: '#fff'}}}
               />
            </View>
            <View style = {styles.searchbar}>
        <SearchBar
        placeholder='Type Here...'/>
            </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    //justifyContent: 'space-between',
  },
   searchbar: {
  },
  testHeader: {
      justifyContent: 'flex-start',
  }




});
