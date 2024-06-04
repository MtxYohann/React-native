import { Tabs } from "expo-router";
import Fontawesome from "@expo/vector-icons/FontAwesome"


export default function TabLayout() {

    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Fontawesome color={color} name="home" />
                    ),
                }}
            />
            <Tabs.Screen
                name="donate"
                options={{
                    title: "Don",
                    tabBarIcon: ({ color }) => (
                        <Fontawesome color={color} name="bank" />
                    ),
                }}
            />
            <Tabs.Screen
                name="legal"
                options={{
                    title: "Mentions légales",
                    tabBarIcon: ({ color }) => (
                        <Fontawesome color={color} name="info" />
                    ),
                }}
            /> 
            <Tabs.Screen
                name="action"
                options={{
                    title: "Mes bonnes actions",
                    tabBarIcon: ({ color }) => (
                        <Fontawesome color={color} name="smile-o" />
                    ),
                }}
            />           
        </Tabs>
    );
}
