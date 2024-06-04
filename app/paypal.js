import { Text, View, StyleSheet, Image} from "react-native"

export default function PaypalScreen() {

    return (
        <View 
            style={styles.container}>               
            <Image 
            style={styles.image}
            source={require('../assets/sauver.png')}/>
            <Text>Faire un don</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcf6ea',
      alignItems: 'center',
      justifyContent: 'center',
    },
  image: {
    resizeMode:"center"
  },
  });
  