import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

const App = () => {
  const [quote, setQuote] = useState(''); // Initialize quote state

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://quotes.rest/qod.json');

        if (!response.ok) { // Check for successful response
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setQuote(json.contents.quotes[0].quote);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []); // Empty dependency array ensures fetching only once

  return (
    <SafeAreaView style={styles.container}>
      {quote ? ( // Conditionally render quote if available
        <Text style={styles.paragraph}>{quote}</Text>
      ) : (
        <Text style={styles.paragraph}>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

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

export default App;