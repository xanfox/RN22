import { Modal, Platform, KeyboardAvoidingView } from "react-native";

import { VStack, ScrollView, Box } from 'native-base';

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Register() {
  const osv = Platform.OS;

  return (




    <VStack   p={6} flex="1" justifyContent="flex-end" w="100%"  bg="gray.600">      
      
        
        <Box
          
          borderBottomColor="gray.500" 
          borderBottomStyle={"double"} 
          borderBottomWidth="2" pt="5%" 
          
          style={{position: 'absolute', left: 0, right: 0, top: 0 }}>
        
        <Header 
           
          title={"Nova solicitação: "+osv}
          
        />
        </Box>
             
        <KeyboardAvoidingView   
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : -254 }
        >
        <VStack >
          

          <Input 
            placeholder='Descrição do Problema'
            multiline
            h={40}
            textAlignVertical="top" />
          <Input mt={4} placeholder='Número do Patrimônio' />
          <Button title='Cadastrar Chamado' />

        </VStack>
        </KeyboardAvoidingView> 
      
    </VStack>





  );
}