


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
                        centerComponent={{text: 'Notes By Ronak', style: {color: '#fff'}}}
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
                            this.saveData(this.state.text,b);
                            //this.arr.push(b);
                            this.setArr();
                            // this.displayData();


                        }}
                        placeholder='Type Here...'/>
                </View>
            </View>


        );
    }
    setArr(){
        AsyncStorage.getAllKeys()
            .then((ks) => {
                ks.forEach((k) => {
                    AsyncStorage.getItem(k)
                        .then((v) => this.arr.push({title:v}));
                });
            });

}

    saveData(a,b) {

        let obj= b;
        AsyncStorage.setItem(a , obj);
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
    DemLists: {
        flex: 14,
        alignSelf: 'stretch',
    }




});