import React from 'react';
import {ScrollView, View} from 'react-native';
import StoryHeaderComponent from './StoryHeaderComponent';


class StoryHeaderList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {id: 1, name: '영우', image: 'https://avatars3.githubusercontent.com/u/49789734?s=80&v=4'},
                {id: 2, name: '영우', image: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4'},
                {id: 3, name: '영우', image: 'https://avatars1.githubusercontent.com/u/48307960?s=64&v=4'},
                {id: 4, name: '영우', image: 'https://avatars1.githubusercontent.com/u/9072200?s=64&v=4'},
                {id: 5, name: '영우', image: 'https://avatars2.githubusercontent.com/u/18691542?s=64&v=4'},
                {id: 6, name: '영우', image: 'https://avatars2.githubusercontent.com/u/45916875?s=64&v=4'},
                {id: 7, name: '영우', image: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4'},
                {id: 8, name: '영우', image: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4'}
            ]
        }
    }

    render() {
        const {users} = this.state;
        return(
            <View style={{ height: 80}}>
                <View style={{ flex: 3 , justifyContent: 'center'}}>
                    <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                }}>
                        {users.map(user => {
                            return (
                                <StoryHeaderComponent key={user.id} user={user} />
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default StoryHeaderList;
