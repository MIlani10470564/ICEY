import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Animated, 
  StyleSheet 
} from 'react-native';

export default function App() {
  // Animated values
  const buttonScale = useRef(new Animated.Value(1)).current;
  const inputOpacity = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // When button is pressed, both animations run at the same time
    Animated.parallel([
      Animated.sequence([
        Animated.timing(buttonScale, {
          toValue: 0.9,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(buttonScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(inputOpacity, {
          toValue: 0.5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(inputOpacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.image} 
      />

      <Animated.View style={[styles.inputContainer, { opacity: inputOpacity }]}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </Animated.View>

      <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Animate!</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

// 🎨 STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  inputContainer: {
    width: '85%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
