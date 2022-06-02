import { Box, Flex, FormControl, FormLabel, HStack, Image, Select, Stack, Text, VStack } from "@chakra-ui/react"

const Footer = () => {
    return(
        <Box p='54px' height='360px' backgroundImage='/bg-footer.png' backgroundRepeat='no-repeat' backgroundSize='contain'>
            <HStack spacing={'20px'} direction='row' justifyContent='space-between'>
                <Box>
                    <Stack spacing={'12px'} direction='row' alignItems='center'>
                        <Image src="/logo.png" width='46px' height='46px' alt=""></Image>
                        <Text fontSize='24px' fontWeight='500'>Agency</Text>
                    </Stack>
                    <Text my='32px' fontSize='16px'>Nam posuere accumsan porta. Integer <br />id orci sed ante tincidunt tincidunt sit<br /> amet sed libero.</Text>
                    <Text fontSize='16px'>© Skyrev Theme 2020</Text>
                </Box>
                <Flex direction='row'>
                    <Box>
                        <Text fontSize='18px' fontWeight='700'>COMPANY</Text>
                        <Text my='18px' fontSize='16px'>Curabitur egestas</Text>
                        <Text fontSize='16px'>Donec dignissim</Text>
                        <Text my='18px' fontSize='16px'>Donec dignissim</Text>
                        <Text fontSize='16px'>Donec dignissim</Text>
                    </Box>
                    <Box mx='120px'>
                        <Text fontSize='18px' fontWeight='700'>SERVICES</Text>
                        <Text my='18px' fontSize='16px'>Curabitur egestas</Text>
                        <Text fontSize='16px'>Donec dignissim</Text>
                        <Text my='18px' fontSize='16px'>Donec dignissim</Text>
                        <Text fontSize='16px'>Donec dignissim</Text>
                    </Box>
                    <Box>
                        <Text fontSize='18px' fontWeight='700'>RESOURCES</Text>
                        <Text my='18px' fontSize='16px'>Curabitur egestas</Text>
                        <Text fontSize='16px'>Donec dignissim</Text>
                        <Text mt='18px' fontSize='16px'>Donec dignissim</Text>
                    </Box>
                </Flex>
                <Box my='auto'>
                    <HStack spacing={'18px'} direction='row'>
                        <Stack>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.75" cy="18.75" r="18.75" fill="#EBEBEB"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.6667 14.3333V11.8529C20.6667 10.7331 20.924 10.1667 22.7318 10.1667H25V6H21.2151C16.5771 6 15.0469 8.04427 15.0469 11.5534V14.3333H12V18.5H15.0469V31H20.6667V18.5H24.4854L25 14.3333H20.6667V14.3333Z" fill="#2196F3"/>
                            </svg>
                        </Stack>
                        <Stack>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19.25" cy="18.75" r="18.75" fill="black" fillOpacity="0.08"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.0605 10H12.0379C11.2174 10 10.5 10.5908 10.5 11.4019V26.4574C10.5 27.2732 11.2174 28 12.0379 28H27.0558C27.8811 28 28.5 27.2686 28.5 26.4574V11.4019C28.5047 10.5908 27.8811 10 27.0605 10V10ZM16.0796 25.0039H13.5008V16.9862H16.0796V25.0039V25.0039ZM14.8793 15.7671H14.8605C14.0353 15.7671 13.5008 15.1529 13.5008 14.384C13.5008 13.6009 14.0494 13.0008 14.8933 13.0008C15.7373 13.0008 16.2531 13.5962 16.2718 14.384C16.2718 15.1529 15.7373 15.7671 14.8793 15.7671V15.7671ZM25.5039 25.0039H22.9251V20.62C22.9251 19.5697 22.55 18.8523 21.6169 18.8523C20.9043 18.8523 20.4823 19.3352 20.2947 19.8041C20.2244 19.9729 20.2056 20.2027 20.2056 20.4371V25.0039H17.6268V16.9862H20.2056V18.1021C20.5807 17.5676 21.1668 16.7986 22.5312 16.7986C24.2239 16.7986 25.5039 17.9146 25.5039 20.3199V25.0039V25.0039Z" fill="#2196F3"/>
                            </svg>
                        </Stack>
                        <Stack>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18.75" cy="18.75" r="18.75" fill="black" fillOpacity="0.08"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M29 12.8958C28.2626 13.2167 27.4743 13.4333 26.6436 13.5333C27.4912 13.0333 28.1439 12.2417 28.449 11.3C27.6565 11.7625 26.7792 12.1 25.8426 12.2792C25.0924 11.4917 24.0244 11 22.8462 11C20.5787 11 18.7436 12.8083 18.7436 15.0375C18.7436 15.3542 18.7775 15.6625 18.8495 15.9583C15.4378 15.7917 12.4117 14.1833 10.3901 11.7375C10.0384 12.3333 9.83492 13.0292 9.83492 13.7667C9.83492 15.1667 10.5639 16.4042 11.6658 17.1292C10.9877 17.1125 10.352 16.9292 9.80102 16.625C9.80102 16.6417 9.80102 16.6583 9.80102 16.675C9.80102 18.6333 11.2166 20.2625 13.0941 20.6333C12.7508 20.725 12.3863 20.775 12.0134 20.775C11.7506 20.775 11.4921 20.75 11.242 20.7C11.7633 22.3042 13.2806 23.4708 15.0776 23.5042C13.6747 24.5875 11.9032 25.2333 9.97902 25.2333C9.64844 25.2333 9.3221 25.2125 9 25.175C10.8097 26.3333 12.9669 27 15.281 27C22.8377 27 26.9657 20.8458 26.9657 15.5083C26.9657 15.3333 26.9614 15.1583 26.953 14.9875C27.754 14.4167 28.449 13.7083 29 12.8958V12.8958Z" fill="#2196F3"/>
                            </svg>
                        </Stack>
                        <Stack>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="19.25" cy="18.75" r="18.75" fill="black" fillOpacity="0.08"/>
                                <circle cx="19.25" cy="19" r="3.5" fill="#2196F3"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.1274 15.3381C17.034 14.4315 18.2393 13.9268 19.5214 13.9268C20.8035 13.9268 22.0089 14.4341 22.9155 15.3407C23.4907 15.916 23.9017 16.6072 24.1254 17.3786H27.7286V12.5358C27.7286 11.3996 26.8504 10.5215 25.7143 10.5215H13.3714C12.2353 10.5215 11.2714 11.3996 11.2714 12.5358V17.3786H14.9174C15.1412 16.6072 15.5521 15.9133 16.1274 15.3381V15.3381ZM26.3571 14.0872C26.3571 14.3902 26.1116 14.6358 25.8086 14.6358H24.1629C23.8599 14.6358 23.6143 14.3902 23.6143 14.0872V12.4415C23.6143 12.1385 23.8599 11.8929 24.1629 11.8929H25.8086C26.1115 11.8929 26.3571 12.1385 26.3571 12.4415V14.0872V14.0872Z" fill="#2196F3"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.9155 22.1262C22.0089 23.0328 20.8035 23.5268 19.5214 23.5268C18.2393 23.5268 17.034 23.0355 16.1274 22.1289C15.2224 21.224 14.7234 19.9929 14.7215 18.75H11.2714V24.8786C11.2714 26.0147 12.2353 26.9786 13.3714 26.9786H25.7143C26.8504 26.9786 27.7286 26.0147 27.7286 24.8786V18.75H24.3213C24.3195 19.9929 23.8205 21.2213 22.9155 22.1262V22.1262Z" fill="#2196F3"/>
                            </svg>
                        </Stack>
                    </HStack>
                    <FormControl>                        
                        <Select mt='38px' id='country' placeholder='Select country'>
                            <option>United Arab Emirates</option>
                            <option>Nigeria</option>
                        </Select>
                    </FormControl>
                </Box>
            </HStack>
        </Box>
    )
}

export default Footer