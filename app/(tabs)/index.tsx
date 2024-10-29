import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';  // Import the useRouter hook
import { Picker } from '@react-native-picker/picker';
import EditScreenInfo from '@/components/EditScreenInfo';

export default function TabOneScreen() {
  const router= useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [sex, setSex] = useState('male'); // Default value
  const [healthConditions, setHealthConditions] = useState('');

  const handleSubmit = () => {
    console.log({
      name,
      age,
      weight,
      sex,
      healthConditions,
    });

    alert('Form submitted!');
    router.push('/three');

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Nutrition Guard</Text>
      <Text>Please enter all of your personal information</Text>
      

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Weight (pounds):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your weight"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Height(feet and inches)</Text>
      <TextInput
        style={styles.input}
        placeholder="feet"
        value={heightFeet}
        onChangeText={setHeightFeet}
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        placeholder="inches"
        value={heightInches}
        onChangeText={setHeightInches}
        keyboardType="numeric"
        />
         <Text style={styles.label}>Health Conditions</Text>
      <TextInput
        style={styles.input}
        placeholder="health condition"
        value={healthConditions}
        onChangeText={setHealthConditions}
        keyboardType="default"
        />
        

      

      <Button title="Submit" onPress={handleSubmit} />

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 15, // Adds space below the picker
    borderColor: '#ccc', // (Optional) You can give a border to match the inputs
    borderWidth: 1,      // (Optional) If you want a bordered picker
    borderRadius: 5,     // (Optional) To round the corners, same as input fields
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
});
