import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import dictionary from '../database';

export default class HomeScreen extends Component{

    getWord=(word) => {
        var text = text.toLowerCase()
        try{
            var word = dictionary[text]["word"]
            var lexicalCategory = dictionary[text]["lexicalCategory"]
            var definition = dictionary[text]["definition"]
            this.setState({
                    "word" : word,
                    "lexicalCategory" : lexicalCategory,
                    "definition" : definition
            })
        }
        catch(err){
            alert("Sorry this word is not available for now")
            this.setState({
                'text':'',
                'isSearchPressed':false
            })
        }
    }

    render(){
        return(
            <View>
                <TextInput
                style={styles.inputBox}
                onChangeText={text => {
                    this.setState({
                        text: text,
                        isSearchPressed: false,
                        word : "Loading...",
                        lexicalCategory : '',
                        examples : [],
                        definition : ""
                    });
                }}
                value={this.state.text}
                />
                <TouchableOpacity
                style={styles.SearchButton}
                onPress={() => {
                    this.setState({ isSearchedPressed: true});
                    this.getWord(this.state.text)
                }}>
                </TouchableOpacity>

                <View style = {styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                        Word: {" "}
                    </Text>
                    <Text style = {{fontSize: 10}}>
                        {this.state.word}
                    </Text>
                </View>
                <View style = {styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                        Type: {" "}
                    </Text>
                    <Text style = {{fontSize: 10}}>
                        {this.state.lexicalCategory}
                    </Text>
                </View>
                <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text style={styles.detailsTitle}>
                        Definition: {" "}
                    </Text>
                    <Text style = {{fontSize: 10}}>
                        {this.state.definition}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputBoxContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '80%',
        alignSelf: 'center',
        height: 40
    }
})