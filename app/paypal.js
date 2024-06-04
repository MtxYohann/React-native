import {Text, Image, ScrollView, View, ActivityIndicator, StyleSheet} from "react-native"
import { WebView } from 'react-native-webview';
import React from "react";

export default function PaypalScreen() {
  const [loading, setLoading] = React.useState(true);

  const handleWebViewLoad = () => {
    setLoading(false);
  };
    return (
        <ScrollView 
            style={styles.container}>               
            <Image 
            style={styles.image}
            source={require('../assets/sauver.png')}/>
            <Text>Faire un don</Text>
            {loading && (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <WebView style={{ flex: 1, height: 400 }} source={{ uri: "https://react-paypal-js-storybook.fly.dev/buttons.html" }} onLoad={handleWebViewLoad} />   
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcf6ea',
    },
  image: {
    resizeMode:"center"
  },
  });
  