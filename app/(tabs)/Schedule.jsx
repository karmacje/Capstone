import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ScheduleScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Schedule</ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Today's Schedule</ThemedText>
          <ThemedView style={styles.scheduleList}>
            <ThemedText style={styles.scheduleItem}>• Morning Feeding - 7:00 AM</ThemedText>
            <ThemedText style={styles.scheduleItem}>• Health Check - 9:00 AM</ThemedText>
            <ThemedText style={styles.scheduleItem}>• Afternoon Feeding - 2:00 PM</ThemedText>
            <ThemedText style={styles.scheduleItem}>• Temperature Check - 4:00 PM</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#007AFF',
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
    backgroundColor: '#fff',
    shadowColor: '#000',
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
  },
  scheduleList: {
    gap: 12,
  },
  scheduleItem: {
    fontSize: 16,
  },
}); 