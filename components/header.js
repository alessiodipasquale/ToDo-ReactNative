import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ec407a',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: "200"
    }
});

export default Header;