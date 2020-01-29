import React from 'react';
import {Thumbnail} from "native-base";

class StoryHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;

        return (
            <Thumbnail
                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                source={{uri: user.image}} />
        )
    }
}

export default StoryHeaderComponent;
