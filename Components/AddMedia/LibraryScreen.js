import React from 'react';
import {PermissionsAndroid, Button, TouchableHighlight, ScrollView, View, Image, StyleSheet} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";



class LibraryScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { photos: [] }
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

    componentDidMount() {
        this._getPermissionReadExternalStorage()
            .then(r => {
                CameraRoll.getPhotos({
                first: 20,
                assetType: 'All'
                })
                .then(r => {
                    this.setState({ photos: r.edges });
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
                        {this.state.photos.map((p, i) => {
                            return (
                                <Image
                                    key={i}
                                    style={styles.image}
                                    source={{ uri: p.node.image.uri }}
                                />
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        // flex: 1,
        width: '30%',
        height: 100,
        margin: 1,
    },
});

export default LibraryScreen;
