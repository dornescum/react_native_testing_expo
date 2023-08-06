import React from 'react';
import {Text, View, StyleSheet, Pressable} from "react-native";


const GoalItem = (props) => {

    return (
        // sa putem adauga functii ca si in react pt asta folosim onPress
        // style pt ios este o problema
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            {/*bind() face legatura*/}
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>

    );
}


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText:{
        color: 'white'
    }
})