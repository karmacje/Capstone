import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function HomeScreen() {
  const [ammoniaLevel] = useState(50); // This would come from your sensor data
  const { colors } = useTheme();

  const getAmmoniaStatus = (level) => {
    if (level >= 50) return { text: 'High Level', color: colors.error };
    if (level >= 30) return { text: 'Medium Level', color: colors.warning };
    return { text: 'Normal Level', color: colors.success };
  };

  const status = getAmmoniaStatus(ammoniaLevel);

  const reminders = [
    { time: '08:00 AM', task: 'Morning Cleaning', location: 'Tangkal A' },
    { time: '12:00 PM', task: 'Feeding Time', location: 'Tangkal A' },
  ];

  const trendData = [
    { label: '-3h', value: 20 },
    { label: '-2h', value: 30 },
    { label: '-1h', value: 40 },
    { label: 'Now', value: 50 },
  ];

  const maxTrendValue = Math.max(...trendData.map(d => d.value));

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    welcomeText: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text,
    },
    notificationButton: {
      padding: 8,
    },
    gaugeContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    gaugeBackground: {
      width: '100%',
      height: 20,
      backgroundColor: colors.gauge,
      borderRadius: 10,
      overflow: 'hidden',
    },
    gaugeProgress: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: 10,
    },
    ammoniaValue: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginTop: 10,
    },
    statusBadge: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 16,
      marginTop: 8,
    },
    statusText: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: '500',
    },
    alertBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: `${colors.error}20`,
      padding: 16,
      borderRadius: 12,
      marginBottom: 20,
    },
    alertText: {
      marginLeft: 10,
      color: colors.error,
      flex: 1,
    },
    section: {
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 12,
      color: colors.text,
    },
    reminderItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    reminderTime: {
      width: 80,
      fontSize: 12,
      color: colors.textSecondary,
    },
    reminderDetails: {
      flex: 1,
    },
    reminderTask: {
      fontSize: 14,
      fontWeight: '500',
      color: colors.text,
    },
    reminderLocation: {
      fontSize: 12,
      color: colors.textSecondary,
    },
    trendContainer: {
      flexDirection: 'row',
      height: 150,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    trendColumn: {
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 4,
    },
    trendBar: {
      width: '60%',
      backgroundColor: colors.primary,
      borderRadius: 4,
      minHeight: 20,
    },
    trendLabel: {
      marginTop: 8,
      fontSize: 12,
      color: colors.textSecondary,
    },
  });

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={require('../../assets/images/default-avatar.jpg')}
            style={styles.avatar}
          />
          <ThemedText style={styles.welcomeText}>Welcome, User!</ThemedText>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Ammonia Level Gauge */}
      <View style={styles.gaugeContainer}>
        <View style={styles.gaugeBackground}>
          <View style={[styles.gaugeProgress, { width: `${ammoniaLevel}%` }]} />
        </View>
        <ThemedText style={styles.ammoniaValue}>{ammoniaLevel}ppm</ThemedText>
        <View style={[styles.statusBadge, { backgroundColor: status.color }]}>
          <ThemedText style={styles.statusText}>{status.text}</ThemedText>
        </View>
      </View>

      {/* Alert Box */}
      <View style={styles.alertBox}>
        <Ionicons name="warning" size={20} color={colors.error} />
        <ThemedText style={styles.alertText}>
          Urgent: Ammonia Levels{'\n'}
          High ammonia levels detected. Cleaning recommended
        </ThemedText>
      </View>

      {/* Reminders */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Upcoming Reminders</ThemedText>
        {reminders.map((reminder, index) => (
          <View key={index} style={styles.reminderItem}>
            <ThemedText style={styles.reminderTime}>{reminder.time}</ThemedText>
            <View style={styles.reminderDetails}>
              <ThemedText style={styles.reminderTask}>{reminder.task}</ThemedText>
              <ThemedText style={styles.reminderLocation}>{reminder.location}</ThemedText>
            </View>
          </View>
        ))}
      </View>

      {/* Trend Graph */}
      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Recent Ammonia Trend</ThemedText>
        <View style={styles.trendContainer}>
          {trendData.map((data, index) => (
            <View key={index} style={styles.trendColumn}>
              <View 
                style={[
                  styles.trendBar, 
                  { height: `${(data.value / maxTrendValue) * 100}%` }
                ]}
              />
              <ThemedText style={styles.trendLabel}>{data.label}</ThemedText>
            </View>
          ))}
        </View>
      </View>
    </ThemedView>
  );
} 