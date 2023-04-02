import { createStackNavigator } from "@react-navigation/stack";
import { AccountSetup } from "../screens/AccountSetup";
import { SignIn } from "../screens/SignIn";
import { TabRoutes } from "./tab.routes";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountSetup" component={AccountSetup} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  );
}
