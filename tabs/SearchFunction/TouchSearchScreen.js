import React from 'react';
import { View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class TouchSearchScreen extends React.Component {
    
    render() {
        return (
            <Container>
                <Header searchBar transparent>
                    <Item>
                        <Icon name='ios-search'/>
                        <Input placeholder='Search'/>
                    </Item>
                </Header>
            </Container>
        );
  }
}

export default TouchSearchScreen;