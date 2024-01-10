

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
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
          <Image src='https://media.istockphoto.com/id/1176722220/photo/empty-green-grass-field-and-illuminated-outdoor-stadium-with-fans-front-field-view.jpg?s=612x612&w=0&k=20&c=YFh_7QVyJKuF9iBFgX4QF9c4-ojJE0_vCJjeORQExX4='
          style={{height:'100%',width:'100%',resizeMode: 'stretch'}}/>
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

