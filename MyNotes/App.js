

import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, ScrollView} from 'react-native';
import { SearchBar, Header , List, ListItem} from 'react-native-elements';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {text:""}
        this.arr = []
    }

    handleChangeText = (typedText) =>{
        this.setState({text:typedText})
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.testHeader}>

                    <Header
                        centerComponent={{text: 'Take your Notes', style: {color: '#fff'}}}
                    />
                </View>
               <View style = {styles.DemLists}>
                   <ScrollView>
                <List ref={arr => this.arr= arr}>
                    {
                        this.arr.map((arr) => (
                            <ListItem
                                key={arr.title}
                                title={arr.title}

                            />
                        ))
                    }
                </List>
                   </ScrollView>
            </View>
                <View style={styles.searchbar}>
                    <SearchBar
                        ref={search => this.search = search}
                        onChangeText={this.handleChangeText }
                        onSubmitEditing={baz =>   {
                            this.search.clearText();

                            var b = {title:this.state.text};
                            this.arr.push(b);
                              this.saveData(this.state.text);
                              // test out the data AsyncStorage

                              this.displayData(this.state.text); // this will be key for the value that is in asynStorgae


                            //
                            // fo oduct there is no need to alert , the array of objects
                            // alert(this.arr)

                        }}
                        placeholder='Type Here...'/>
                </View>
            </View>


        );
    }

    saveData(word) {


        let obj= word;
        AsyncStorage.setItem(word, obj);
    }
    displayData = async (note) => {
      // the key will be the note
        try {
            let user = await AsyncStorage.getItem(note);
            alert(user);
        }
        catch(error){
            alert(error);
        }
    }
}

// getAllElements = () =>{
//   this.arr.forEach(function(element)){
//     if ( element != null){
//       this.displayData(element);
//     }
//   }
// }

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
    DemLists: {
        flex: 14,
        alignSelf: 'stretch',

    }




});
