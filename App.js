import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    // setEnteredGoalText('')
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    // setCourseGoals((currentCourseGoals)=>[...currentCourseGoals, enteredGoalText])
    setCourseGoals((currentCourseGoals)=>[...currentCourseGoals, {
      text: enteredGoalText , id: Math.random().toString()
    }])
  }

  return (
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.textInput}
              placeholder="Your course goal!"
              onChangeText={goalInputHandler}
          />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) =>{
            return (
                <GoalItem text={itemData.item.text}/>
                // <View style={styles.goalItem}>
                //   <Text style={styles.goalText}>{itemData.item.text}</Text>
                // </View>
            )
          }}
                    keyExtractor={(item, index)=>{
                      return item.id; //dc nu am key
                    }}
          alwaysBounceVertical={false}
          />
          {/*<ScrollView >*/}
          {/*  /!*<Text>*!/*/}
          {/*  {courseGoals.map((goal)=>*/}
          {/*      <Text key={goal} style={styles.goalItem}>{goal}</Text>)}*/}
          {/*  /!*</Text>*!/*/}
          {/*</ScrollView>*/}
          <Text></Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
  // goalItem: {
  //   margin: 8,
  //   padding: 8,
  //   borderRadius: 5,
  //   backgroundColor: '#5e0acc',
  //   color: 'white'
  // },
  // goalText:{
  //   color: 'white'
  // }
});
