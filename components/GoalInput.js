import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        // setEnteredGoalText('')
    }
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            {/*value este important 2 way binding */}
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.btn}>
                <Button title="Add Goal" onPress={addGoalHandler} color='#ffffff' />
            </View>

        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    btn: {
        backgroundColor: '#5e0acc',
        borderRadius: 5
    }
})