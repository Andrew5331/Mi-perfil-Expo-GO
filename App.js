import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={require('./assets/avatar.png')}
        />

        <Text style={styles.name}>Andres Felipe Ramos</Text>
        <Text style={styles.role}>Programador de juegos</Text>
        <Text style={styles.role}>Ingenieria informatica</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text style={styles.ability}>• Programacion Avanzada</Text>
        <Text style={styles.ability}>• SQL, Python, Java, C# y C++</Text>
        <Text style={styles.ability}>• Creador de contenido y juegos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
   
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#722F37',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },
  role: {
    fontSize: 15,
    color: '#6C6C70',
    marginTop: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E5EA',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8E8E93',
    letterSpacing: 0.5,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  ability: {
    fontSize: 14,
    color: '#3A3A3C',
    alignSelf: 'flex-start',
    marginTop: 4,
  },
});