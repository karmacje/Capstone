import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PigPenScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Pig Pens</ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Pen A</ThemedText>
          <ThemedView style={styles.penInfo}>
            <ThemedText style={styles.infoItem}>• Capacity: 10 pigs</ThemedText>
            <ThemedText style={styles.infoItem}>• Current: 8 pigs</ThemedText>
            <ThemedText style={styles.infoItem}>• Temperature: 25°C</ThemedText>
            <ThemedText style={styles.infoItem}>• Humidity: 65%</ThemedText>
          </ThemedView>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>View Details</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Pen B</ThemedText>
          <ThemedView style={styles.penInfo}>
            <ThemedText style={styles.infoItem}>• Capacity: 12 pigs</ThemedText>
            <ThemedText style={styles.infoItem}>• Current: 10 pigs</ThemedText>
            <ThemedText style={styles.infoItem}>• Temperature: 24°C</ThemedText>
            <ThemedText style={styles.infoItem}>• Humidity: 68%</ThemedText>
          </ThemedView>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>View Details</ThemedText>
          </TouchableOpacity>
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
  penInfo: {
    gap: 12,
    marginBottom: 16,
  },
  infoItem: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 