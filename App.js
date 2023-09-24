import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const initialColors = ['black', 'black', 'black', 'black'];
  const [textColors, setTextColors] = useState(initialColors);

  const toggleTextColor = (index) => {
    const updatedColors = [...textColors];

    updatedColors[index] = updatedColors[index] === 'black' ? getSpecifiedColor(index) : 'black';

    setTextColors(updatedColors);
  };

  const getSpecifiedColor = (index) => {
    switch (index) {
      case 0:
        return 'blue';
      case 1:
        return 'red';
      case 2:
        return 'lime';
      case 3:
        return 'yellow';
      default:
        return 'black';
    }
  };

  const renderButton = (index, title) => (
    <TouchableOpacity
      key={index}
      style={styles.button}
      onPress={() => toggleTextColor(index)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.emptySpace} />

      <View style={styles.row}>
        {renderButton(0, 'Button 1')}
        {renderButton(1, 'Button 2')}
      </View>

      <View style={styles.row}>
        {renderButton(2, 'Button 3')}
        {renderButton(3, 'Button 4')}
      </View>

      <Text style={[styles.text, { color: textColors[0] }]}>Text 1</Text>
      <Text style={[styles.text, { color: textColors[1] }]}>Text 2</Text>
      <Text style={[styles.text, { color: textColors[2] }]}>Text 3</Text>
      <Text style={[styles.text, { color: textColors[3] }]}>Text 4</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  emptySpace: {
    height: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  text: {
    fontSize: 60,
    paddingVertical: 5,
    textAlign: 'center',
    backgroundColor: 'gray',
  },
});

export default App;
