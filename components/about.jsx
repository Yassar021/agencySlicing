import { Box, Container, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react"

const About = () => {
    return(
        <Container pt='66px' maxW='1520px'>
            <Flex direction='row'>
                <HStack spacing='96px'>
                    <Box backgroundImage='/bg-about.png' width='753px' height='565px' backgroundSize='contain' backgroundRepeat='no-repeat' />           
                    <Container>
                        <Text  mb='16px' fontSize='28px' fontWeight='500'>Nulla lobortis nunc vitae purus facilisis</Text>
                        <Text fontSize='18px'>Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.</Text>
                        <HStack textAlign='center' mt='32px'>
                            <Box p='4px' width='175px' height='164px'>
                                <Text mb='32px' fontSize='48px' fontWeight='700'>+200</Text>
                                <Stack alignItems='center'>
                                    <svg width="69" height="12" viewBox="0 0 69 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="68.5" height="11.5" rx="5.75" fill="#2196F3"/>
                                    </svg>
                                </Stack>
                                <Text mt='16.5px' fontSize='24px' fontWeight='500'>Employee</Text>
                            </Box>
                            <Box p='4px' width='175px' height='164px'>
                                <Text mb='32px' fontSize='48px' fontWeight='700'>+500</Text>
                                <Stack alignItems='center'>
                                    <svg width="69" height="12" viewBox="0 0 69 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="68.5" height="11.5" rx="5.75" fill="#2196F3"/>
                                    </svg>
                                </Stack>
                                <Text mt='16.5px' fontSize='24px' fontWeight='500'>Projects</Text>
                            </Box>
                            <Box p='4px' width='175px' height='164px'>
                                <Text mb='32px' fontSize='48px' fontWeight='700'>+300</Text>
                                <Stack alignItems='center'>
                                    <svg width="69" height="12" viewBox="0 0 69 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="68.5" height="11.5" rx="5.75" fill="#2196F3"/>
                                    </svg>
                                </Stack>
                                <Text mt='16.5px' fontSize='24px' fontWeight='500'>Clients</Text>
                            </Box>  
                        </HStack>                      
                   </Container>
                   
                </HStack>
            </Flex>
        </Container>
    )
}

export default About