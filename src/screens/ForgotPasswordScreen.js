import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

const windowDimensions = Dimensions.get('window');
const { width, height } = windowDimensions;

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleDimensionsChange = () => {
      const { width, height } = Dimensions.get('window');
      // Handle dimension changes if needed
    };

    Dimensions.addEventListener('change', handleDimensionsChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionsChange);
    };
  }, []);

  const handleForgotPassword = () => {
    // Handle forgot password logic
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0.1 * width,
    paddingVertical: height < 600 ? 30 : 0.1 * height,
  },
  input: {
    width: '100%',
    height: height < 600 ? 40 : 0.06 * height,
    marginBottom: height < 600 ? 10 : 0.02 * height,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
