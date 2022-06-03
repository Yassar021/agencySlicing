import { Box, Container, Flex, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react"

const OurExpertise = () => {
    return(
        <Container pt='66px' maxW='1520px'>
            <Flex direction='row'>
                <HStack spacing={{lg:'40px',xl:'96px'}}>
                    <Box backgroundImage='/bg-ourexpertise.png' width={{md:'352px',xl:'753px'}} height={{md:'385px',xl:'565px'}} backgroundSize='contain' backgroundRepeat='no-repeat' />           
                   <Box pr='80px' width={{md:'370px'}}>
                        <Box>
                            <Text fontSize='28px' fontWeight='500'>Nulla lobortis nunc vitae purus facilisis</Text>
                            <Text fontSize='18px'>Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.</Text>
                        </Box>
                        <SimpleGrid columns={2} spacing={'10px'} mt='32px'>
                            <Box width='286px'>
                                <Stack>
                                    <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="24.0416" y="0.958374" width="34" height="34" rx="6" transform="rotate(45 24.0416 0.958374)" fill="#BBDEFB"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3642 22.9628L17.6843 24.6426L23.0843 30.0426L35.0843 18.0426L33.4044 16.3628L23.0843 26.6225L19.3642 22.9628ZM33.8843 25.2426C33.8843 30.5225 29.5641 34.8426 24.2843 34.8426C19.0044 34.8426 14.6843 30.5225 14.6843 25.2426C14.6843 19.9628 19.0044 15.6426 24.2843 15.6426C25.1843 15.6426 26.0843 15.7628 26.9245 16.0027L28.7843 14.1426C27.4044 13.5426 25.9044 13.2426 24.2843 13.2426C17.6843 13.2426 12.2843 18.6426 12.2843 25.2426C12.2843 31.8426 17.6843 37.2426 24.2843 37.2426C30.8843 37.2426 36.2843 31.8426 36.2843 25.2426H33.8843Z" fill="#2196F3"/>
                                    </svg>
                                </Stack>
                                <Text my='6px'  fontSize='28px' fontWeight='500'>Nulla lobortis nunc</Text>
                                <Text fontSize='16px'>Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
                            </Box>
                            <Box width='286px'>
                                <Stack>
                                    <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="24.0416" y="0.958374" width="34" height="34" rx="6" transform="rotate(45 24.0416 0.958374)" fill="#B2EBF2"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M24 20.6727C21.6426 20.6727 19.7142 22.6012 19.7142 24.9584C19.7142 27.3157 21.6426 29.2441 24 29.2441C26.3574 29.2441 28.2857 27.3157 28.2857 24.9584C28.2857 22.6012 26.3574 20.6727 24 20.6727ZM34.2288 23.8155C33.7143 19.0728 29.8856 15.2441 25.1428 14.7299V12.9584H22.8572V14.7298C18.1144 15.2441 14.2857 19.0727 13.7712 23.8155H12V26.1012H13.7712C14.2857 30.8439 18.1143 34.6726 22.8571 35.1871V36.9584H25.1428V35.1872C29.8855 34.6727 33.7142 30.844 34.2288 26.1013H36V23.8155H34.2288ZM24 32.9584C19.5998 32.9584 16 29.3585 16 24.9584C16 20.5582 19.5998 16.9584 24 16.9584C28.4001 16.9584 31.9999 20.5583 31.9999 24.9584C31.9999 29.3585 28.4001 32.9584 24 32.9584Z" fill="#00BCD4"/>
                                    </svg>
                                </Stack>
                                <Text my='6px'  fontSize='28px' fontWeight='500'>Vestibulum faucibus</Text>
                                <Text fontSize='16px'>Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
                            </Box>
                            <Box width='286px' mt='40px'>
                                <Stack>
                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="24.0416" y="0.916748" width="34" height="34" rx="6" transform="rotate(45 24.0416 0.916748)" fill="#EDE7F6"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M28.6771 24.5107L24.1657 27.9423C24.1016 27.937 24.0374 27.9316 23.9733 27.9316C23.0272 27.9316 22.2628 28.696 22.2628 29.6421C22.2628 30.5882 23.0272 31.3526 23.9733 31.3526C24.9194 31.3526 25.6837 30.5882 25.6837 29.6421C25.6837 29.578 25.6784 29.5138 25.673 29.4497L29.1047 24.9383L28.6771 24.5107Z" fill="#651FFF"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23.9733 15.9584C17.3612 15.9584 12 21.3196 12 27.9316C12 29.7704 12.4169 31.5076 13.1546 33.0631H15.0842C14.261 31.6412 13.7906 30.0377 13.7212 28.3593H15.4209V27.504H13.7212C13.7853 25.9646 14.1862 24.484 14.8864 23.153L16.3563 24.0029L16.784 23.2599L15.314 22.4154C15.7096 21.7953 16.18 21.2074 16.7145 20.6729C17.2597 20.133 17.853 19.6573 18.4837 19.2564L19.3283 20.7156L20.0713 20.288L19.2267 18.8288C20.5523 18.1339 22.0169 17.7437 23.5457 17.6795V19.3793H24.4009V17.6795C25.9296 17.7437 27.3942 18.1392 28.7198 18.8288L27.8806 20.288L28.6236 20.7156L29.4682 19.2564C30.0989 19.6573 30.6922 20.133 31.2374 20.6729C31.7719 21.2074 32.237 21.79 32.6379 22.4154L31.1733 23.2599L31.6009 24.0029L33.0708 23.153C33.771 24.484 34.1719 25.9646 34.2361 27.504H32.5256V28.3593H34.2254C34.1559 30.0377 33.6855 31.6412 32.8624 33.0631H34.792C35.5296 31.5076 35.9465 29.7704 35.9465 27.9316C35.9465 21.3196 30.5853 15.9584 23.9733 15.9584Z" fill="#651FFF"/>
                                    </svg>

                                </Stack>
                                <Text my='6px'  fontSize='28px' fontWeight='500'> Suspendisse porttitor</Text>
                                <Text fontSize='16px'>Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
                            </Box>
                            <Box width='286px' mt='40px'>
                                <Stack>
                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="24.0416" y="0.916748" width="34" height="34" rx="6" transform="rotate(45 24.0416 0.916748)" fill="#FBEABB"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M24 20.3585C25.366 20.3585 26.6554 20.8956 27.6306 21.8708C28.6058 22.8459 29.1429 24.1354 29.1429 25.5014C29.1429 26.4454 28.906 27.3245 28.4387 28.1142C27.992 28.8695 27.3439 29.509 26.5645 29.9638L25.7143 30.46V31.4444V35.2441H22.2857V31.4444V30.46L21.4355 29.9638C19.8451 29.0357 18.8571 27.3258 18.8571 25.5014C18.8571 24.1354 19.3942 22.846 20.3694 21.8708C21.3446 20.8956 22.634 20.3585 24 20.3585ZM25.1428 12.9584C24.8002 12.9584 22.8572 12.9584 22.8572 12.9584V16.3869H25.1428V12.9584ZM32.0569 15.8439L30 17.9015L31.5999 19.5014L33.6573 17.4444L32.0569 15.8439ZM15.9431 15.8439L14.3426 17.4444L16.4001 19.5013L18 17.9015L15.9431 15.8439ZM24 18.6442C20.2288 18.6442 17.1429 21.7302 17.1429 25.5014C17.1429 28.0159 18.5145 30.2441 20.5714 31.4445V36.9584H27.4286V31.4444C29.4855 30.2441 30.8571 28.0727 30.8571 25.5013C30.8571 21.7301 27.7712 18.6442 24 18.6442ZM36 24.3585H32.5714V26.6442H36V24.3585ZM15.4286 24.3585H12V26.6442H15.4286V24.3585Z" fill="#F38D21"/>
                                    </svg>
                                </Stack>
                                <Text my='6px'  fontSize='28px' fontWeight='500'>Ut sed eros</Text>
                                <Text fontSize='16px'>Interdum et malesuada fames ac ante ipsum primis in faucibus.</Text>
                            </Box>
                        </SimpleGrid>                      
                   </Box>
                   
                </HStack>
            </Flex>
        </Container>
    )
}

export default OurExpertise