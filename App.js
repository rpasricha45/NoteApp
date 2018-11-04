
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { SearchBar, Header, Card } from 'react-native-elements';

export default class App extends React.Component {
    state = {
        text: ''
    };
    _storeData = async () => {
        try{
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it');

        }catch(error){

        }
    };
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.testHeader}>

                    <Header
                        centerComponent={{text: 'What up Bish', style:{color: '#fff'}}}
                    />





                </View>
                <View style = {styles.searchbar}>
                    <SearchBar
                        ref={search => this.search = search}
                        onChangeText={text => this.setState({text})}
                        onSubmitEditing={random =>this.search.clearText()}
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
        justifyContent: 'center',
        //justifyContent: 'space-between',
    },
    searchbar: {
        // bottom:-100,


        position:'absolute',
        left:0,
        right:0,
        bottom:0,


        alignItems:'stretch',

        alignSelf:'stretch',


        flex:1,


    },
    testHeader: {
        // justifyContent: 'flex-start',
        // bottom:100,
        flex:1,
        alignSelf:'stretch',


    }




});