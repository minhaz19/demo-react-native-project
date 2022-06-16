import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./component/Detail";
import HomeScreen from "./component/Home";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <stack.Screen name="Detail" component={DetailScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
