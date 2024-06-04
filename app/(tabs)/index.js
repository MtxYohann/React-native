import { StatusBar } from 'expo-status-bar';
import { View,StyleSheet,Text,Image } from "react-native"

export default function HomeSreen () {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Chaque personne peut aider à sauver une vie</Text>
        <StatusBar style="auto" />
        <Image 
          style={styles.image}
          source={require('../../assets/sauver.png')}/>
        <Text style={styles.text}>L’impact de l’association Sauver des vies dans la communauté locale et internationale est profond et significatif. Depuis 2009, nous nous engageons à servir les plus démunis, en apportant une aide précieuse aux personnes en situation de précarité économique, sanitaire et sociale. Grâce à nos actions d’intérêt général, nous intervenons auprès d’un large public mixte, en veillant à garantir le droit, la justice et l’équité pour tous. Que ce soit à travers l’organisation de maraudes et la distribution de repas, la collecte et l’envoi de colis alimentaires, la construction d’écoles, les conseils juridiques, la prévention en santé ou encore l’accompagnement administratif, notre association joue un rôle essentiel dans la vie des personnes que nous aidons. Notre dévouement et notre solidarité sont les piliers de notre action, et chaque jour, nous travaillons pour sauver des vies, ici et dans le monde entier. Rejoignez-nous dans cette noble mission et ensemble, faisons la différence.</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fcf6ea',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      resizeMode: 'contain',
      height: 100,
      width: 200,
      borderRadius: 50,
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    text:{
      fontSize: 12,
    },
  });
