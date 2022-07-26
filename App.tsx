
import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { THEME } from "./src/styles/theme";

import { Details } from "./src/screens/Details";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  

  
  return (
    <NativeBaseProvider theme={THEME}>  
      {/* //deixa a barra de status transparente */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent" 
        translucent    
      />

      {fontsLoaded ? <Details/> : <Loading/>}  
    </NativeBaseProvider>
  );
}


