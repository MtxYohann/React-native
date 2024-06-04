import { Text, View, StyleSheet, Image, Pressable} from "react-native"
import { Link } from "expo-router";

export default function DonnateScreen({}) {

    return (
        <View 
            style={styles.container}>   
            <Text style={styles.title}>Sauver une vie</Text>            
            <Image 
            style={styles.image}
            source={require('../../assets/sauver.png')}/>            
            <Text style={styles.text}>*Les dons au profit des associations donnent droit à une réduction d’impôt sur le revenu de 66 % à 75 % du montant versé, selon l’association choisie, dans la limite de 20 % du revenu imposable.</Text>            
            <Link href="../paypal" asChild>
              <Pressable style={styles.box}>
                <Text style={styles.text}>Faire un don</Text>
              </Pressable>
            </Link>
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
    title:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    text:{
      fontSize: 12,
    },
  image: {
    resizeMode:"center"
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,

    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor:"#febcbd"
  }
  });
  