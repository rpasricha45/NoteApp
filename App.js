
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { SearchBar, Header, Card } from 'react-native-elements';

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
                <View style={styles.testHeader}>

                    <Header
                        centerComponent={{text: 'What up Bish', style: {color: '#fff'}}}
                    />
                </View>

               <View style={styles.searchbar}>
                    <SearchBar
                        ref={search => this.search = search}
                        onChangeText={this.handleChangeText }
                        onSubmitEditing={baz =>   {
                            this.search.clearText();
                            this.saveData(this.state.text);
                            this.displayData();
                        }}
                        placeholder='Type Here...'/>
                </View>
            </View>


        );
    }
    
    saveData(word) {
        let obj= word;
        AsyncStorage.setItem('user', obj);
    }
    displayData = async () => {
        try {
        let user = await AsyncStorage.getItem('user');
        alert(user);
        }
        catch(error){
           alert(error);
        }
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


    },




});