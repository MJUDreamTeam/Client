import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import {Thumbnail,container} from "native-base";

class FollowButton extends Component {
    static defaultProps = {
        isFollow: false,
    }
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.isFollow){
            return (
                <TouchableOpacity style={styles.followingButton}>
                    <Text style={styles.followingTitle}>팔로잉</Text>
                </TouchableOpacity>
            );
        }else{
            return (
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followTitle}>팔로우</Text>
                </TouchableOpacity>
            );
        }
    }
}

const styles = StyleSheet.create({
    followButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3385ff',
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 10,
    },
    followingButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderColor: '#595959',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 10,
    },
    followingTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        padding: 26,
    },
    followTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        padding: 26,
    },
});

export default FollowButton;