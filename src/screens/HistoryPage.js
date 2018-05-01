import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
} from 'native-base';
import HaveDone from '../HaveDone'

class HistoryPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            times: 0,
        };
    }
    render(){
        return (
            <Container>
                <Content>
                    <Text>This is History Page.</Text>
                    <HaveDone/>
                </Content>
            </Container>
        );
    }
}

export default HistoryPage;
