import { Text, ScrollView, StyleSheet, Image} from "react-native"

export default function LegalScreen() {

    return (
        <ScrollView 
            style={styles.container}>               
            <Image 
            style={styles.image}
            source={require('../../assets/sauver.png')}/>
            <Text style={styles.text}>MENTIONS LÉGALES & POLITIQUE DE CONFIDENTIALITÉ
SauveQuiVeut.fr est une plateforme ludo-éducative développée par la Fédération nationale des sapeurs-pompiers de France avec France-Sélection et IX Points, et le soutien de son partenaire AG2R-LA MONDIALE. Elle a pour vocation de proposer aux internautes un univers ludique permettant de développer ses connaissances tout en s'amusant.

SauveQuiVeut.fr vient ainsi enrichir les nombreux engagements des sapeurs-pompiers de France pour la prévention des risques, la sensibilisation et la formation du public aux comportements qui sauvent. Les sapeurs-pompiers sont notamment les premiers formateurs du public aux gestes qui sauvent, avec quelques 100.000 personnes formées chaque année au PSC1. Pour en savoir plus, rendez-vous sur http://www.pompiers.fr ou allez à la rencontre des sapeurs-pompiers près de chez vous !

AG2R LA MONDIALE est le n°1 de la protection sociale en France ; spécialiste de l'assurance de la personne, le groupe couvre près de 12 millions de personnes en proposant des produits et services en retraite, épargne, prévoyance et santé. Partageant avec les Sapeurs-pompiers de France des valeurs communes, le groupe s'est engagé pour agir à leurs côtés sur de nombreuses actions visant à développer les comportements face aux risques et a donc naturellement soutenu la création de la plateforme SauveQuiVeut.fr.

SauveQuiVeut.fr ainsi que l'ensemble de ses sous-rubriques est un service de la Fédération Nationale des Sapeurs-Pompiers de France - 32 rue Bréguet - 75011 PARIS - France - Tél. 0149231818 - Courriel : web@pompiers.fr - Site : http://www.pompiers.fr.

L'accès et l'utilisation du site impliquent l'acceptation intégrale et sans réserve par l'utilisateur de toutes les dispositions ci-dessous.

Les éditeurs du site se réservent le droit de modifier et de mettre à jour, sans préavis, les présentes conditions d'utilisation et tous les éléments, produits ou services présentés. L'ensemble de ces modifications s'impose aux utilisateurs qui doivent consulter les présentes conditions lors de chaque connexion.

CONCEPTION ET DÉVELOPPEMENT
Le site Internet SauveQuiVeut.fr est réalisé à partir d'une application conçue, développée et propulsée par :

France-Sélection - 7, rue Roland Martin - 94500 Champigny-sur-Marne - France - Tél. : 0155971818 - http://www.franceselection.fr
IX Points - 210-1365, avenue Galilée - Québec, Québec, Canada - G1P 4G4 - Tél. : (418) 6942115  - http://ix-points.com
HÉBERGEMENT
SauveQuiVeut.fr est hébergé par IX Points. Les données sont stockées dans un centre de données de Microsoft, à Amsterdam, Pays-Bas, avec garantie de la part de Microsoft que celles-ci ne seront pas déplacées en dehors de l'Europe.

PROPRIÉTÉ INTELLECTUELLE - DROITS DE REPRODUCTION
L'intégralité du site est protégée par les législations françaises et internationales relatives à la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables. L'ensemble des textes, graphismes, icônes, photographies, plans, logos, vidéos, sons, marques, … et plus généralement l'ensemble des éléments composant le site ne peuvent conformément à l'article L122-4 du code de la propriété intellectuelle, faire l'objet d'une quelconque représentation ou reproduction, intégrale ou partielle, sur quelque support que ce soit, sans l'autorisation expresse et préalable de la Fédération Nationale des Sapeurs-Pompiers de France. Le non-respect de cette interdiction constitue un acte de contrefaçon pouvant engager la responsabilité civile ou pénale de son auteur. La Fédération Nationale des Sapeurs-Pompiers de France se réserve le droit d'engager des poursuites judiciaires à l'encontre de toute personne qui n'aurait pas respecté cette interdiction. Ainsi, pour toute demande de reproduction d'éléments contenus dans le site, merci de contacter la Fédération Nationale des Sapeurs-Pompiers de France.

PROTECTION DES DONNÉES PERSONNELLES - CNIL
Les informations recueillies sur le site font l'objet d'un traitement informatique destiné à tenir informés les membres du site via l'envoi de bulletins d'information. Aucune information personnelle n'est cédée à des tiers, sauf autorisation expresse et préalable de votre part. Les informations ne sont collectées qu'à des fins de gestion de votre demande et de statistiques internes à la Fédération Nationale des Sapeurs-Pompiers de France.

Conformément à la loi « informatique et libertés » du 6 janvier 1978 (DI-007 délibération n° 2006-138 du 09/05/2006 - Dispense de déclaration des traitements constitués à des fins d'information) et Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent. Si vous souhaitez exercer ce droit et obtenir une communication des informations vous concernant, veuillez nous adresser un message à l'adresse info@sauvequiveut.fr.

INFORMATIONS COMMUNIQUÉES
Les informations communiquées sur le site sont fournies à titre indicatif, elles sont non contractuelles et ne sauraient engager la responsabilité de la Fédération Nationale des Sapeurs-Pompiers de France. La Fédération Nationale des Sapeurs-Pompiers de France se réserve également le droit, à tout moment et sans préavis, d'y apporter des améliorations et/ou modifications.

La responsabilité de la Fédération Nationale des Sapeurs-Pompiers de France ne saurait être engagée pour les dommages de toute nature, directs, ou indirects, résultant du contenu et/ou de l'utilisation du site SauveQuiVeut.fr et des sites Internet liés au site ou auxquels les utilisateurs pourraient avoir accès via le site SauveQuiVeut.fr.

MODIFIER OU SUPPRIMER LES DONNÉES RECUEILLIES
Si vous souhaitez que vos renseignements soient supprimés ou modifiés d’une façon ou d’une autre, il suffit de vous rendre sur la page « Paramètre du profil ». Vous trouverez un lien en bas de page pour supprimer votre compte et les données collectées de façon permanente.

UTILISATEURS
L'utilisateur du site est responsable des dommages de toute nature, matériels ou immatériels, directs ou indirects, causés à tout tiers, y compris à la Fédération Nationale des Sapeurs-Pompiers de France, du fait de l'utilisation ou de l'exploitation illicite du site lui-même et/ou de l'un de ses éléments, quels que soient la cause et le lieu de survenance de ces dommages, et garantit la Fédération Nationale des Sapeurs-Pompiers de France des conséquences des réclamations ou actions dont elle pourrait, de ce fait, faire l'objet.

L'utilisateur du site SauveQuiVeut.fr renonce à exercer tout recours contre la Fédération Nationale des Sapeurs-Pompiers de France, dans le cas de poursuites diligentées par un tiers à son encontre du fait de l'utilisation et/ou de l'exploitation illicite du site.

Le site est accessible aux mineurs. Cependant, les parents et les personnes détentrices de l’autorité parentale conservent leur responsabilité quant à l’efficience de l’utilisation du site et de la compréhension des informations diffusées par les enfants.</Text>
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
  text:{
    fontSize: 12,
  }
  });
  