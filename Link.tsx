import React, {useCallback, useEffect} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

const sURL = 'tel:+919123456789';

const unsupportedURL = 'slack://open?team=123456';

type OpenURLButtonProps = {
  url: string;
  children: string;
};

type OpenSettingsButtonProps = {
    children: string;
  };
  
const OpenSettingsButton = ({children}: OpenSettingsButtonProps) => {
    const handlePress = useCallback(async () => {
      // Open the custom settings if the app has one
      await Linking.openSettings();
    }, []);
    return <Button title={children} onPress={handlePress} />;

}    
  

const OpenURLButton = ({url, children}: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const parsedUrl = new URL(url);
      const supported = await Linking.canOpenURL(parsedUrl.toString());
      console.log(supported);
    console.log(Linking.getInitialURL());
    if (supported) {
    
      await Linking.openURL(parsedUrl.toString());
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


const Link = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={sURL}>Open Telephone</OpenURLButton>
      <OpenSettingsButton>Open Settings</OpenSettingsButton>
      {/* <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Link;