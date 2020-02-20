import React, {Component} from 'react';
import {
    PermissionsAndroid,
    Dimensions,
    ScrollView,
    View,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import PostScreen from "./PostScreen";
import {Text} from "native-base";

class LibraryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { photos: [], pickPhoto: null }
    }

    _getPermissionReadExternalStorage = async() => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    _updatePickPhoto = (p) => {
        this.setState( {pickPhoto: p.node.image.uri})
    }

    componentDidMount() {
        this._getPermissionReadExternalStorage()
            .then(r => {
                CameraRoll.getPhotos({
                first: 20,
                assetType: 'All'
                })
                .then(r => {
                    this.setState({ photos: r.edges, pickPhoto: r.edges[0].node.image.uri });
                })
                .catch((err) => {
                    //Error Loading Images
                    console.error(err)
                });
            });
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView style={styles.container}>
                    <View style={styles.imageGrid}>
                        <Image
                            style={styles.bigImage}
                            source={{ uri: this.state.pickPhoto }}/>
                    </View>
                    <View style={styles.imageGrid}>
                        {this.state.photos.map((p, i) => {
                            return (
                                <TouchableOpacity onPress={() => this._updatePickPhoto(p)}>
                                    <Image
                                        key={i}
                                        style={styles.image}
                                        source={{ uri: p.node.image.uri }}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

function PostScreen () {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

function LibraryNavigator({navigation}) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LibraryScreen"
                    component={LibraryScreen}
                    options={{
                        headerTitle: '라이브러리',
                        headerRight: () => (
                            <Button onPress={() => navigation.navigate('PostScreen')} title="Next" color='#000'/>
                        ),
                    }}
                />
                <Stack.Screen
                    name="PostScreen"
                    component={PostScreen}
                    options={{
                        headerTitle: '글쓰기',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    bigImage: {
        width: Dimensions.get('window').width,
        height: 100,
        borderWidth: 1,
        borderColor: 'lightgray',
        resizeMode: 'cover',
        aspectRatio: 1  // 정사각형을 구현해주는 마법의 스타일
    },
    image: {
        width: Dimensions.get('window').width * 0.25,
        // height: 100,
        borderWidth: 1,
        borderColor: "lightgray",
        resizeMode: 'contain',
        aspectRatio: 1,
    },
});

export default LibraryNavigator;
