import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

//import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';  // Import the useRouter hook

import { NavigationContainer } from '@react-navigation/native';

export default function TabTwoScreen() {
  const router= useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Nutrition Guard!</Text>
      <Text style={styles.title}>Create an account or login now:</Text>
      
      {/*email*/}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
        />

        {/*password*/}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="#888"
        />

        {/*login button */}
        <TouchableOpacity style={styles.button} onPress={()=>{router.push('/three');}}>
          <Text style={styles.title}>Login</Text>
        </TouchableOpacity>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        {/*register button */}
        <TouchableOpacity style={styles.subtitle} onPress={()=>{router.push('/three');}}>
          <Text style={styles.title}>Don't have an account? Register here!</Text>
        </TouchableOpacity>
      {/*<EditScreenInfo path="app/(tabs)/two.tsx"/>*/}

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="app/(tabs)/two.tsx" />*/}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle:{
    fontSize: 16, 
    textAlign: 'center',
    marginBottom: 20,
  },
  input:{
    width: '100%', 
    padding: 10, 
    marginVertical: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5, 
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#007BFF',
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
});
