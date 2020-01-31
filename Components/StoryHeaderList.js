import React from 'react';
import {ScrollView, View, ActivityIndicator} from 'react-native';
import StoryHeaderComponent from './StoryHeaderComponent';


class StoryHeaderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true};
        this.abortController = new AbortController();
    }
    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/users', {signal: this.abortController.signal})
            .then(res => res.json())
            .then(resJson => {
                this.setState({
                    isLoading: false,
                    users: resJson
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    componentWillUnmount(): void {
        this.abortController.abort();
    }

    render() {
        const users = this.state.users;

        if(this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

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
