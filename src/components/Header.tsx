import { HStack, IconButton, Text, Heading, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
    title: string;
}

export function Header({title, ...rest} : Props) {
    
    const {colors}  = useTheme();
    
    return (
      
    <HStack
        
        bg="gray.600"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        pb={2}
        pt={2}
        {...rest}
    >
        <IconButton 
            icon={<CaretLeft color={colors.gray[200]} />} size={24}
        />
        <Heading 
            color={'gray.100'} 
            textAlign='right' 
            fontSize={'lg'} 
            flex={1} 
            p={5}  
        >
            {title} 
        </Heading>
    </HStack>



  );


  
}