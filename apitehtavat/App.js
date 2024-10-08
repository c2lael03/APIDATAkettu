import React, { useState, useEffect } from 'react';
import { Button, Text, View, Image } from 'react-native';

const App = () => {
  const [fact, setFact] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchFact = async () => {
    try {
      const response = await fetch('https://randomfox.ca/floof/'); // Use the correct API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setFact(data.image); // Set fact to the image URL
      setImageUrl(data.image); // Set image URL for display
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFact(); // Fetch data on initial render
  }, []); // Empty dependency array ensures fetching only once

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Hae uusi ketun kuva" onPress={fetchFact} />

      {imageUrl && (
        <View style={{ marginVertical: 20 }}> 
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 200, height: 200, alignSelf: 'center' }}
          />
        </View>
      )}
    </View>
  );
};

export default App;