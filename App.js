import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  // State background cho component cha
  const [bgColor, setBgColor] = useState('#ffffff');

  // Callback xử lý khi bấm button
  const handlePress = (name, color) => {
    setBgColor(color);
    Alert.alert(name);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      
      <ColorButton
        title="GREEN"
        color="green"
        onPress={() => handlePress('GREEN', 'green')}
      />

      <ColorButton
        title="BLUE"
        color="blue"
        onPress={() => handlePress('BLUE', 'blue')}
      />

      <ColorButton
        title="BROWN"
        color="brown"
        onPress={() => handlePress('BROWN', 'brown')}
      />

      <ColorButton
        title="YELLOW"
        color="yellow"
        onPress={() => handlePress('YELLOW', 'yellow')}
      />

      <ColorButton
        title="RED"
        color="red"
        onPress={() => handlePress('RED', 'red')}
      />

      <ColorButton
        title="BLACK"
        color="black"
        onPress={() => handlePress('BLACK', 'black')}
      />

    </View>
  );
}

/* ===== Component con: Button ===== */
function ColorButton({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

/* ===== Styles dùng chung ===== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});