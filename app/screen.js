import { useState } from 'react';
import React from 'react';
import { TouchableOpacity, Switch, StyleSheet, Text, View } from 'react-native';

const Screen = (props) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operation, setOperation] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleNumberPress = (number) => {
    setDisplayValue((prevDisplayValue) => (prevDisplayValue === "0" ? number : prevDisplayValue + number));
  };

  const handleOperationPress = (op) => {
    setOperation(op);
    setPrevValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqualPress = () => {
    if (operation && prevValue !== null) {
      switch (operation) {
        case "add":
          setDisplayValue((parseFloat(prevValue) + parseFloat(displayValue)).toString());
          break;
          case "subtract":
            setDisplayValue((parseFloat(prevValue) - parseFloat(displayValue)).toString());
            break;
          case "division":
            setDisplayValue((parseFloat(prevValue) / parseFloat(displayValue)).toString());
            break;
          case "multiply":
            setDisplayValue((parseFloat(prevValue) * parseFloat(displayValue)).toString());
            break;
          case "mod":
            setDisplayValue((parseFloat(prevValue) % parseFloat(displayValue)).toString());
            break;
          
          
        default:
          break;
      }
      setOperation(null);
      setPrevValue(null);
    }
  };

  return (
    <>
      <View style={isDarkMode?styles.displayScreenDark : styles.displayScreen}>
        <Switch
          trackColor={{ false: '#767577', true: '#51557E' }}
          thumbColor={isDarkMode ? '#1C6DD0' : '#6B728E'}
          ios_backgroundColor="#3e3e3e"
          style={{ position: 'absolute', top: 15, left: 15 }}
          value={isDarkMode}
          onValueChange={toggleSwitch} />
        <Text style={isDarkMode? styles.displayTextDark: styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={isDarkMode?styles.buttonDark: styles.button}
          onPress={() => setDisplayValue("0")}
          
          >
          <Text style={{fontSize:27}}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDarkMode?styles.buttonDark: styles.button}
          onPress={() => setDisplayValue(-displayValue)}
        >
          <Text style={{fontSize:27}}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={isDarkMode?styles.buttonDark: styles.button}
          onPress={() => handleOperationPress("mod")}
        >
          <Text style={{fontSize:27}}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
          onPress={() => handleOperationPress("division")}>
          <Text style={{fontSize:27}}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={isDarkMode?styles.buttonDark: styles.button}
          onPress={() => handleNumberPress("7")}
        >
          <Text style={{fontSize:27}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("8")}>
          <Text style={{fontSize:27}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("9")}>
          <Text style={{fontSize:27}}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleOperationPress("multiply")}>
          <Text style={{fontSize:27}}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("4")}>
          <Text style={{fontSize:27}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("5")}>
          <Text style={{fontSize:27}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("6")}>
          <Text style={{fontSize:27}}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleOperationPress("subtract")}>
          <Text style={{fontSize:27}}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("1")}>
          <Text style={{fontSize:27}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("2")}>
          <Text style={{fontSize:27}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress("3")}>
          <Text style={{fontSize:27}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleOperationPress("add")}>
          <Text style={{fontSize:27}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[isDarkMode?styles.buttonDark: styles.button, { flex: 2 }]}
          onPress={() => handleNumberPress("0")}
        >
          <Text style={{fontSize:27}}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isDarkMode?styles.buttonDark: styles.button}
        onPress={() => handleNumberPress(".")}>
          <Text style={{fontSize:27}}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            isDarkMode ? styles.buttonDark : styles.button,
            isDarkMode ? { backgroundColor: "#1B2430" } : { backgroundColor: "#E5D4FF" }
          ]}
          onPress={() => handleEqualPress()}>
          <Text style={[{fontSize:27},isDarkMode ?{color:"#E7F6F2"}:{color:"#22092C"}]}>=</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  displayScreen: {
    backgroundColor: "#E5D4FF",
    width: "100%",
    height: "25%",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },
  displayScreenDark : {
    backgroundColor: "#1B2430",
    width: "100%",
    height: "25%",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },
  displayText: {
    fontSize: 35,
    color: "#22092C",
    marginBottom: 5,
    marginEnd: 10,
  },
  displayTextDark: {
    fontSize: 35,
    color: "#E7F6F2",
    marginBottom: 5,
    marginEnd: 10,
  },
  buttonsRow: {
    flexDirection: 'row',
    width: "100%",
    height: "15%",
  },
  button: {
    backgroundColor:"#F1EAFF",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.11,
    borderColor: 'black',
    borderRadius:0.3,
  },
  buttonDark: {
    backgroundColor: '#51557E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.11,
    borderColor: 'black',
    borderRadius:0.3,
  }
});

export default Screen;
