// namespaces
import { useState } from "react";
import { FlatList, HStack, IconButton, VStack, useTheme, Text, Heading, Center } from 'native-base';
import { SignOut, ChatTeardropText } from "phosphor-react-native";

//assets
import Logo from "../assets/logo_secondary.svg";

//import components
import { Filter } from "../components/Filter";
//importa também a tipagem q foi criada dentro do component, para que ela possa estar disponível
import { Order, OrderProps } from "../components/Order";
import { Button } from "../components/Button";


export function Home() {
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
    
    //explicitar a tipagem de useState<tipagem[chave pq é um vetor]>([{isso vem do banco}])
    const [orders, setOrders] = useState<OrderProps[]>([


]);

    const { colors } = useTheme();
    function gimme(){
        alert('Você Clicou na OS')
    }
  return (

    <VStack flex={1} pb={6} bg="gray.700">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="gray.600"
            pt="12"
            pb={5}
            px={6}
        >
            <Logo/>
            <IconButton 
                icon={<SignOut size={26} color={colors.gray[300]}/>}
            />
        </HStack>
                
        <VStack flex={1} px={6}>
            <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                <Heading color="gray.200">
                    Meus Chamados
                </Heading> 
                <Text color="gray.200">
                    69
                </Text>
            </HStack>

            <HStack space={3} mb={8}>
                <Filter 
                    type='open'
                    title='Em andamento'
                    onPress={() => setStatusSelected('open')}
                    isActive={statusSelected === 'open'}
                    
                />

                <Filter 
                    type='closed'
                    title='Finalizado'
                    onPress={() => setStatusSelected('closed')}
                    isActive={statusSelected === 'closed'}
 
                />     
            </HStack>

            <FlatList 
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Order data={item} onPress={gimme} /> } 
                showsVerticalScrollIndicator={false}
                //add um espaço no fim da listagem
                //coloca entre duas chaves pq é um objeto de estilo
                //objeto transmitindo uma propriedade de estilo? sei lá
                contentContainerStyle = {{paddingBottom: 100}}
                //para quebrar a linha na função arrow usar chave após o arrow
                ListEmptyComponent={() => (
                    <Center> 
                        <ChatTeardropText color={colors.gray[300]} size={40}/> 
                        <Text color={'gray.300'} fontSize="xl" mt={6} textAlign="center">
                            Você ainda não possui {'\n'}
                            solicitações 
                            {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                        </Text>
                    </Center>
                )}
               
            />
            
            <Button title="Nova Ordem"/>
        </VStack>
    </VStack>
  );
}