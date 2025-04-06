import { StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/context/ThemeContext';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [temperatureAlerts, setTemperatureAlerts] = useState(true);
  const { isDarkMode, toggleTheme, colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      padding: 20,
      paddingTop: 40,
      backgroundColor: colors.primary,
    },
    title: {
      fontSize: 28,
      color: '#fff',
    },
    content: {
      padding: 16,
      gap: 16,
    },
    card: {
      padding: 16,
      borderRadius: 12,
      backgroundColor: colors.surface,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardTitle: {
      fontSize: 18,
      marginBottom: 16,
      color: colors.text,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    settingLabel: {
      fontSize: 16,
      color: colors.text,
    },
    button: {
      backgroundColor: colors.primary,
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 8,
    },
    logoutButton: {
      backgroundColor: colors.error,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Settings</ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Notifications</ThemedText>
          <ThemedView style={styles.settingItem}>
            <ThemedText style={styles.settingLabel}>Push Notifications</ThemedText>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: colors.border, true: `${colors.primary}80` }}
              thumbColor={notifications ? colors.primary : '#f4f3f4'}
            />
          </ThemedView>
          <ThemedView style={styles.settingItem}>
            <ThemedText style={styles.settingLabel}>Temperature Alerts</ThemedText>
            <Switch
              value={temperatureAlerts}
              onValueChange={setTemperatureAlerts}
              trackColor={{ false: colors.border, true: `${colors.primary}80` }}
              thumbColor={temperatureAlerts ? colors.primary : '#f4f3f4'}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Appearance</ThemedText>
          <ThemedView style={styles.settingItem}>
            <ThemedText style={styles.settingLabel}>Dark Mode</ThemedText>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.border, true: `${colors.primary}80` }}
              thumbColor={isDarkMode ? colors.primary : '#f4f3f4'}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Account</ThemedText>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>Edit Profile</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.logoutButton]}>
            <ThemedText style={styles.buttonText}>Logout</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
} 