import React from 'react';
import {View, Switch, StyleSheet} from "react-native";

const SwitchButton = (props) => {
    return (
        <View style = {styles.container}>
            <Switch
                onValueChange = {props.toggleSwitch}
                value = {props.switchValue}/>
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        flex: 1
    }
});

export default SwitchButton;
