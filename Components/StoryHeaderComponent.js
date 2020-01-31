import React from 'react';
import {Thumbnail, Body} from "native-base";
import {View, Text} from 'react-native';

class StoryHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;

        return (
            <View style={{ margin: 5 }}>
                <Thumbnail
                    style={{ borderColor: 'pink', borderWidth: 2 }}
                    source={{uri: user.image}} />
                <Body>
                    <Text note>{user.name}</Text>
                </Body>
            </View>
        )
    }
}

export default StoryHeaderComponent;
