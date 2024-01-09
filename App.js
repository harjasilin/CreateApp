

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CricketScore } from './components/cricketScore';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <>
      {showSplash ? (
        <View style={styles.splashContainer}>
          <Text>Splash Screen</Text>
        </View>
      ) : (
        <CricketScore />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;

