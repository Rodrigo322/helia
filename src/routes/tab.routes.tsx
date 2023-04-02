import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, MagnifyingGlass, Notebook, User } from "phosphor-react-native";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#181A20",
          borderTopColor: "#181A20",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1AB65C",
        tabBarInactiveTintColor: "#757575",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <House size={32} color={color} weight="thin" />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MagnifyingGlass size={32} color={color} weight="thin" />
          ),
        }}
        name="Home2"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Notebook size={32} color={color} weight="thin" />
          ),
        }}
        name="Home3"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <User size={32} color={color} weight="thin" />
          ),
        }}
        name="Home4"
        component={Home}
      />
    </Tab.Navigator>
  );
}
