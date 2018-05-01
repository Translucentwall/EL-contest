import React, { Component } from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import history from '../Data/HaveDoneList.json';

class HaveDone extends Component {
    constructor(props) {
        super(props);
        let text = '';
        this.state = {
            text: text,
        };

    }
render(){
        return(
            <TextInput
                onEndEditing={(text)=>this.addList({text})}/>
        )
}

     addList({text}) {
         history.list.push({thing:text});
         alert({text})
    }
}
module.exports = HaveDone;