import { useState } from "react";

import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import Logo from '../assets/logo_primary.svg';


import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function SignIn(){
    //states dos inputs
    const [name, setName] = useState('Jebah');
    const [pass, setPass] = useState('');

    function handleSignIn(){
        alert("botão clicado"+" Nome: "+name+" Senha: "+ pass);
        console.log(name)
    }

    const { colors } = useTheme();
    return(
        <VStack  flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
            <Logo />
            <Heading color={"gray.100"} fontSize="xl" mb={6} mt={20}>
                Acesse sua conta {name}
            </Heading>

            <Input 
                placeholder="E-Mail"
                mb={4}
                InputLeftElement={<Icon as={ <Envelope color={colors.gray[300]} />} ml={4} mr={4} /> }
                onChangeText = {setName}
                /*onChangeText = {text => setName(text)} sintaxe sem abreviar*/ 
            />

            <Input 
                placeholder="Senha"
                mb={4}
                InputLeftElement={<Icon as={ <Key color={colors.gray[300]}/>} ml={4} mr={4} /> }
                color="white"
                secureTextEntry
                onChangeText = {setPass}

            />
            <Button title="Login" w="full" onPress={handleSignIn}/>
        </VStack>
    )
}


