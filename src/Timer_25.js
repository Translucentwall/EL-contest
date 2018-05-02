import React, { Component } from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';


class Timer_25 extends Component{
    constructor(props) {
        super(props);
        let timeLeft = this.props.timeLeft > 0? this.props.timeLeft : 24;
        let secondLeft = this.props.secondLeft > 0 ? this.props.secondLeft : 59;
        let isTrue = false;
        this.state = {
            timeLeft: timeLeft,
            secondLeft : secondLeft,
            isTrue : isTrue
        };
    }
    countTime(timeLeft,afterEnd) {
        if (timeLeft >= 0) {
            let that = this;
            let interval = setInterval(() => {
                if (that.state.secondLeft < 1) {
                    if (timeLeft <= 0) {
                        clearInterval(interval);
                        afterEnd();
                    }
                    that.setState({
                        secondLeft: 59,
                        timeLeft: that.state.timeLeft - 1,
                    })
                } else {
                    let totalTime = that.state.secondLeft;
                    that.setState({
                        secondLeft: totalTime - 1,
                    })
                }
            }, 1000)
        }
    }
    static _afterEnd(){
        console.log('Time Over!!!');
    }
    componentDidMount () {
        let time = this.state.timeLeft;
        let afterEnd = Timer_25._afterEnd;
        this.countTime(time,afterEnd);
    };
    _onPress=()=>{
        this.state.isTrue = true;
    };
    render(){
        if(this.state.isTrue){
        let display_1 = this.state.timeLeft;
        let display_2 = this.state.secondLeft;
        if((display_1 === 0 && display_2 === 0) || display_1 < 0){
            return(
                <Text style={styles.bigblue}>Time Over</Text>
            )
        }
        else if(display_1 < 10 && display_2 < 10){
            return(
                <Text style={styles.bigblue}>0{display_1} : 0{display_2}</Text>
            )
        }
        else if(display_1 < 10){
            return(
                <Text style={styles.bigblue}>0{display_1} : {display_2}</Text>
            )
        }
        else if(display_2 < 10){
            return(
                <Text style={styles.bigblue}>{display_1} : 0{display_2}</Text>
            )
        }
        else{
            return(
                <Text style={styles.bigblue}>{display_1} : {display_2}</Text>
            )
        }
    }else {return(
            <TouchableHighlight onPress = {this._onPress}>
                <Text style={styles.bigblue}> button</Text>
            </TouchableHighlight>)
        }}

}


const styles = StyleSheet.create({
    bigblue : {
        color : 'blue',
        fontWeight : 'bold',
        fontSize : 30,
    },
});
module.exports = Timer_25;

