import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './firebase/login';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
     initialRouteName='Login'
      >

        <Stack.Screen name='login' component={Login} />
 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;










// const App = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{

//           headerShown: false,
//         }}
//         initialRouteName="Task"
//       >

//         <Stack.Screen name='Task' component={Task}  />

//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
// export default App







 