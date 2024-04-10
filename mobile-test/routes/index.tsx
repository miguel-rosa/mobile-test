import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { User } from "../types/User";



export type RootStackParamList = {
  Home: undefined;
  Details: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // screenOptions={{
      //   headerShown: false
      // }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} getId={({params}) => params['_id']}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes