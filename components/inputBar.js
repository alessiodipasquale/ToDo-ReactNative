import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

const InputBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder='Insert here'
            placeholderTextColor='#212121'
            style={styles.input} 
            onChangeText={(todoInput) => props.textChange(todoInput)}
            value={props.todoInput}/>
            <TouchableOpacity style={styles.addBtn} onPress={props.addNewToDo}>
                <Image style={styles.icon} source={require('./../assets/piu1.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#424242',
        flex: 1,
        fontSize: 18,
        height: 50,
        color: '#fff'
    },
    addBtn: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    icon: {
        width: 40,
        height: 40
    }
})

export default InputBar;