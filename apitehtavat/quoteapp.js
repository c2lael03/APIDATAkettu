
// You can import supported modules from npm
import { Card } from 'react-native-paper';
// or any files within the Snack
import AssetExample from './components/AssetExample';
//api-app:n importit
import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';


const App = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://quotes.rest/qod.json');
        const json = await response.json();
        setQuote(json.contents.quotes[0].quote);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <View>
      <Text>{quote}</Text>
    </View>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});