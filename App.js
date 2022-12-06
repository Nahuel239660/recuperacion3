import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.inputContainer}>
      <TextInput style={styles.textInput}/>
      <Button title='Add' color='9A848F' onPress={() => null }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f5',
  },
  inputContainer:{
    flexDirection:'row',
    margin:20,
    justifyContent: 'space-between',
  },
  textInput:{
    borderBottomWidth:1,
    borderBottomColor: '9A848F',
    paddingVertical:10,
    width: '80%',
  }

});
