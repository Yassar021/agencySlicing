import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react"

const Contact = () => {
    return(
        <Box  maxWidth='1540px' px={{lg:'65px',xl:'112px'}} py='120px'> 
            <Box borderRadius='24px' width={{lg:'885px',xl:'1215px'}} height='168.21px' bgColor='#2196F3' mx='auto' my='auto' py='24px' px='74px'>
                <Flex direction='row' justifyContent='space-between'>
                    <Box>
                        <Text fontSize='32px' fontWeight='700' color='#fff'>Ready to get started ?</Text>
                        <Text mt='12px' fontSize='18px' fontWeight='500' color='#fff'>Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.</Text>
                    </Box>
                    <Button my='auto'
                        rightIcon={
                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clip-Rule="evenodd" d="M0 18.5017L15.905 9.25087L0 0V7.1951L11.3935 9.25087L0 11.3066V18.5017Z" fill="#00BCD4"/>
                            </svg>                   
                        }
                            size='md'
                            height='50px'
                            width='211px'
                            border='2px'
                            borderColor='#00BCD4'
                            backgroundColor='#fff'
                            color='#00BCD4'
                            p='auto'
                    >
                        WRITE TO US
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default Contact