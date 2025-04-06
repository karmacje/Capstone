import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { supabase } from '@/lib/supabase';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const checkEmailExists = async (email) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: 'dummy-password', // We don't care about the password, just checking if email exists
      });

      // If we get here, the email exists
      return true;
    } catch (error) {
      // If error is about invalid credentials, email exists
      if (error.message.includes('Invalid login credentials')) {
        return true;
      }
      // If error is about user not found, email doesn't exist
      if (error.message.includes('User not found')) {
        return false;
      }
      // For other errors, we'll assume email doesn't exist
      return false;
    }
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      // Check if email already exists
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        Alert.alert(
          'Email Already Registered',
          'This email is already registered. Please use a different email or login with your existing account.',
          [
            {
              text: 'Try Again',
              onPress: () => {
                setEmail('');
                setLoading(false);
              },
            },
            {
              text: 'Go to Login',
              onPress: () => {
                router.replace('/(auth)/login');
              },
            },
          ]
        );
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        Alert.alert('Error', error.message);
        return;
      }

      if (data?.user) {
        Alert.alert(
          'Success',
          'Account created successfully! Please check your email for verification.',
          [
            {
              text: 'OK',
              onPress: () => router.replace('/(auth)/login'),
            },
          ]
        );
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Create Account</ThemedText>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          editable={!loading}
        />

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]} 
          onPress={handleSignUp}
          disabled={loading}>
          <ThemedText style={styles.buttonText}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push('/(auth)/login')}
          disabled={loading}>
          <ThemedText style={styles.linkText}>Already have an account? Login</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',
  },
  form: {
    gap: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#007AFF',
  },
}); 