import React, {useState, useEffect} from 'react';
import { Text } from 'native-base';
import {View, Image, TextInput, SafeAreaView, Switch, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import SwitchButton from "./SwitchButton";

function PostScreen(props) {

    const [text, setText] = useState('');
    const [textHeight, setTextHeight] = useState(0);
    const [switchValue1, setSwitchValue1] = useState(false);
    const [switchValue2, setSwitchValue2] = useState(false);
    const [switchValue3, setSwitchValue3] = useState(false);

    const Separator = () => {
        return <View style={{marginVertical: 8, borderBottomColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth}} />
    }
    const toggleSwitch1 = (value) => {
        setSwitchValue1(value)
    }
    const toggleSwitch2 = (value) => {
        setSwitchValue2(value)
    }
    const toggleSwitch3 = (value) => {
        setSwitchValue3(value)
    }


    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={{marginVertical: '1%', flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 50, height: 50}} source={{uri: 'https://rdd9223.github.io/assets/images/profile.jpg'}}/>
                    <TextInput
                        textAlignVertical={'top'}
                        multiline
                        style={{height: Math.max(35,textHeight), flex: 1}}
                        onChangeText={text => setText(text)}
                        onContentSizeChange={e => setTextHeight(e.nativeEvent.contentSize.height)}
                        value={text}
                        placeholder={'문구 입력...'}
                    />
                </View>
                <Separator />
                <View>
                    <TouchableOpacity style={style.row} onPress={()=>alert("사람태그스크린")}>
                        <Text>사람 태그하기</Text>
                    </TouchableOpacity>
                </View>
                <Separator />
                <View>
                    <TouchableOpacity style={style.row} onPress={()=>alert("위치추가 스크린")}>
                        <Text>위치 추가</Text>
                    </TouchableOpacity>
                </View>
                <Separator />
                <View>
                    <Text style={style.row}>다른 미디어에도 게시</Text>
                    <View style={style.media}>
                        <Text>Facebook</Text>
                        <SwitchButton
                            toggleSwitch={toggleSwitch1}
                            switchValue={switchValue1}/>
                    </View>
                    <View style={style.media}>
                        <Text>Twitter</Text>
                        <SwitchButton
                            toggleSwitch={toggleSwitch2}
                            switchValue={switchValue2}/>
                    </View>
                    <View style={style.media}>
                        <Text>Tumblr</Text>
                        <SwitchButton
                            toggleSwitch={toggleSwitch3}
                            switchValue={switchValue3}/>
                    </View>
                </View>
                <Separator />
                <View>
                    <TouchableOpacity style={style.row} onPress={()=>alert("고급설정 스크린")}>
                        <Text style={{ color: 'gray', fontSize: 10}}>고급 설정</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    row: {
        marginVertical: '1%'
    },
    media: {
        marginVertical: '0.5%',
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        margin: '2%'
    },

})
export default PostScreen;
