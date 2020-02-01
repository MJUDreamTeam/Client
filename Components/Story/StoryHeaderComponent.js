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
            <View style={{ flex: 1, width: 55, margin: 5 }}>
                <Thumbnail
                    style={{ borderColor: 'pink', borderWidth: 2 }}
                    // source={{uri: user.image}} />
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'}}/>
                <Body style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                    <Text numberOfLines={1} style={{ fontSize: 10, textAlign: 'center' }}>{user.name}</Text>
                </Body>
            </View>
        )
    }
}

export default StoryHeaderComponent;
