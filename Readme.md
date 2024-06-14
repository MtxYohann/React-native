## Description 
Ce projet est m'a première application mobile, le but premier étant d'apprendre à utiliser expo react native j'ai créé une application vitrine pour une association 
avec plusieurs fonctionnalité.

## Fonctionnalités

Image splash au lancement, bar de navigation, bouton de navigation ainsi qu’un bouton don relié à paypal, utilisation de la caméra et possibilité de lire un code bar


## Installation

1. Cloner le dépôt

```bash
https://github.com/MtxYohann/React-native.git
```

2. Installer les dépendances

```bash
npx expo install
```

3. Lancer l'application

```bash
npx expo start
```

## Cours React Native

## Obejctif

Créer une application

### Installation

```npx create-expo-app -t```
## Expo
On vas utiliser Expo c'est une surcouche de react native (un framework), 
il vas nous simplifier la vie

### Lancer l'app

```
npx expo start
```

## Les vue et le dev mobile :

La vue est la brique de base de l'interface utilisateur dans React Native
```<View>...</view>```

## Structure de l'app

- App : Contien les elements de navigation (file based routing). La structure du dossier app qui determine la navigation de l'app.

-asset:

- Components : Contien tous les composants de l'app qui ne sont pas destine a etre des ecrans

-constants : contient les constantes de l'app (couleurs, tailles, etc...)

-hooks : contient les hooks custom de l'app

-scripts :

-app.json : contient la config de l'app

-babel.config : contient la config de babel

## Expo CLI :

Le cli expo vous permet de lancer votre app, de la deployer, de la build, de la publier...

## EAS CLI :

EAS est un service de build et de deploiement d'expo. il permet de build des app plus rapideet de les deployer sur les stores
```
npm install -g eas-cli
```

## Expo Router

Expo Router est un route pour react native qui permet de naviguer entre les ecrans de l'app en utilisant le systeme de fichier (similaire à Next.js)

```sh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

changer la valeur du main en :
```   "main": "expo-router/entry",```

## Les comosants de base 

React native est un framework qui permet de creer des mobiles multiplatformes en utilisanr React.il est basé sur les composants de React.

Les core composant de React native sont des composants de base qui permettent de creer des interfaces utilisateur. ils utilisent des compsant natifs pour creer des interfaces utilisateur.

## En cas de modif majeur

``` npx expo start -c```