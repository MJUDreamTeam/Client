import React from 'react';
import {ScrollView, View, ActivityIndicator} from 'react-native';
import StoryHeaderComponent from './StoryHeaderComponent';


class StoryHeaderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        // 메모리 누수 콘트롤러
        this.abortController = new AbortController();
    }

    _getData = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    users: json
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    componentDidMount() {
        this._getData();
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
