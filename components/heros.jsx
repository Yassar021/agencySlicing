import { Box, Button, Container, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"

const Hero = () => {
    return(
        <>
        {/* Navbar */}
        <Container maxW='1520px'>
            <Box pt='25px' pl={{lg:'20px',xl:'120px'}} bgImage='/hero-bg.png' backgroundSize='370px' backgroundRepeat='no-repeat' backgroundPosition='top right' > 
                <Flex direction='row' alignItems='center' justify='space-between'>
                    <Stack direction='row' alignItems='center'>
                        <Image ml='8px' src="/logo.png" width='46px' height='46px' alt=""></Image>
                        <Text fontSize='24px' fontWeight='500'>Agency</Text>
                    </Stack>
                    <HStack direction='row' spacing={{md:'8px',xl:'32px'}} justifyItems='center' ml='64px'>
                        <Box borderBottom='2px solid #2196F3' >
                            <Text fontSize='18px' fontWeight='500' color='#2196F3'>Agency</Text>
                        </Box>
                        <Box width='112px'>
                            <Text fontSize='18px' fontWeight='500'>Our Values</Text>
                        </Box>
                        <Box width='112px'>
                            <Text fontSize='18px' fontWeight='500'>Case Studies</Text>
                        </Box>
                        <Box width='56px' mx='auto'>
                            <Text fontSize='18px' fontWeight='500'>Blog</Text>
                        </Box>
                        <Box width='112px' mx='auto'>
                            <Text fontSize='18px' fontWeight='500'>Inner Pages</Text>
                        </Box>
                    </HStack>
                    <Stack direction='row' alignItems='center' ml={{lg:'20px',xl:'232px'}} spacing='28px'>
                        <Text fontSize='16px' fontWeight='500'>LOGIN</Text>
                        <Button
                            size='md'
                            height='40px'
                            width='125px'
                            border='2px'
                            borderColor='#2196F3'
                            backgroundColor='#2196F3'
                            color='#fff'
                            >
                            Register
                        </Button>
                        <svg width="3" height="27" viewBox="0 0 3 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1L1.5 25.5" stroke="#979797" strokeLinecap="square"/>
                        </svg>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.5119 15.95C25.5858 15.5154 25.5858 15.0076 25.5858 14.5C25.5858 13.9924 25.5119 13.5576 25.5119 13.05L28.6257 10.6576C28.9227 10.4403 28.9965 10.0778 28.7742 9.71526L25.8081 4.71245C25.6596 4.42217 25.215 4.2778 24.9181 4.42217L21.2104 5.87225C20.4689 5.29239 19.5796 4.78467 18.6897 4.42217L18.1705 0.579863C18.0966 0.29028 17.7997 0 17.4289 0H11.4967C11.126 0 10.8291 0.29028 10.7552 0.579863L10.1621 4.42217C9.27209 4.78467 8.45668 5.29232 7.64058 5.87225L3.93295 4.42217C3.56216 4.2778 3.19137 4.42217 3.04296 4.71245L0.0768454 9.71533C-0.0708713 10.0048 0.00288249 10.4403 0.225259 10.6577L3.41389 13.05C3.41389 13.5576 3.34 13.9924 3.34 14.5C3.34 15.0076 3.41389 15.4424 3.41389 15.95L0.300059 18.3424C0.00309163 18.5597 -0.0706621 18.9222 0.151575 19.2847L3.11769 24.2875C3.26617 24.5778 3.71079 24.7222 4.00768 24.5778L7.71538 23.1278C8.45689 23.7076 9.34619 24.2153 10.2361 24.5778L10.8292 28.4201C10.9037 28.7826 11.1999 29 11.5707 29H17.503C17.8737 29 18.1706 28.7097 18.2445 28.4201L18.8383 24.5778C19.7276 24.2153 20.5437 23.7077 21.3591 23.1278L25.0668 24.5778C25.4375 24.7222 25.8083 24.5778 25.9568 24.2875L28.9229 19.2847C29.0713 18.9952 28.9968 18.5597 28.7744 18.3423L25.5119 15.95ZM14.4629 19.575C11.5707 19.575 9.27223 17.3279 9.27223 14.5C9.27223 11.6721 11.5707 9.42498 14.4629 9.42498C17.3551 9.42498 19.6536 11.6721 19.6536 14.5C19.6536 17.3279 17.3551 19.575 14.4629 19.575Z" fill="black" fillOpacity="0.54"/>
                        </svg>
                    </Stack>
                </Flex>

                <Flex direction='row'>
                    <Box mt='120px' width='596px'>
                        <Text fontWeight='700' fontSize='48px'>
                            Aenean Facilisis Vitae
                        </Text>
                        <Text fontWeight='500' fontSize='24px' my='24px'>
                            Lorem ipsum dolor sit amet consectetur adipiscing Integer id orci sed ante tincidunt
                        </Text>
                        <Stack direction='row'>
                            <Stack direction='row'>
                                <Button
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
                            </Stack>     
                        </Stack>       
                    </Box>
                    <Box mt='56px'>
                        <Image src="/hero-banner1.png" width='691px' height='416px' alt=""></Image>
                    </Box>
                </Flex>
            </Box>
        </Container>

        <Container  maxW='1520px'>
            <Box px={{md:'10px',xl:'191px'}} mt='56px'>
                <Stack direction='row' spacing='32px'>
                    <Box shadow='lg' p='40px'>
                        <Text fontSize='24px' fontWeight='500' color='#2196F3'>Business Solution</Text>
                        <Text fontSize='18px'>Interdum et malesuada fames ac ante…</Text>
                    </Box>
                    <Box shadow='lg' p='40px'>
                        <Text fontSize='24px' fontWeight='500' color='#2196F3'>Free project quote</Text>
                        <Text fontSize='18px'>Interdum et malesuada fames ac ante…</Text>
                    </Box>
                    <Box shadow='lg' p='40px'>
                        <Text fontSize='24px' fontWeight='500' color='#2196F3'>Nulla lobortis nunc</Text>
                        <Text fontSize='18px'>Interdum et malesuada fames ac ante…</Text>
                    </Box>
                </Stack>  
            </Box>
        </Container>
        </>
    )
}

export default Hero