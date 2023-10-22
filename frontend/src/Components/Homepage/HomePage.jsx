import { Box, Button, Container, Flex, Heading, Image, Input, Select, Text, keyframes,usePrefersReducedMotion } from '@chakra-ui/react'
import Lottie from 'react-lottie';
import * as animationData from './images/banner.json'
import React from 'react'
import JobButton from './JobButton'
import "swiper/css";
import "swiper/css/navigation";
import JobInterest from './JobInterest';
import JobSlider from './JobSlider';
import FeatureCompony from './FeatureCompony';
import DiscoverJob from './DiscoverJob';

const moveBg = keyframes`
    0% {
        background-position: 10% 10%;
    }
    25% {
        background-position: 90% 10%;
    }
    50% {
        background-position: 90% 90%;
    }
    75%{
        background-position: 10% 90%;
    }
    100% {
        background-position: 10% 10%;
    }
`

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const HomePage = () => {
  return (
    <Box
        mb={"50px"}    
    >
        <Box
            h={"100vh"}
            p={"0 10%"}
            w={"100%"}
            display={"flex"}
            gap={"30px"}
            alignItems={"center"}
            justifyContent={"start"}
            bg={`
                radial-gradient(ellipse at top, #76afe4, transparent),
                radial-gradient(ellipse at bottom, #77e7af, transparent),
                radial-gradient(ellipse at left, #868fe5, transparent),
                radial-gradient(ellipse at right, #d683d2, transparent)
            `}
            bgSize={"150% 150%"}
            animation={`${moveBg} 10s ease-in-out infinite`}
            position={"relative"}
        >
            <Box
                zIndex={2}
                minW={'50%'}
                maxW={'100%'}
            >
                <Container
                    mb={'20px'}
                    h={'auto'}
                >
                    <Heading
                        textAlign={'center'}
                        fontWeight={'700'}
                        fontSize={'35px'}
                        lineHeight={'50px'}
                        mb={'6px'}
                    >Find your dream job now</Heading>
                    <Text
                        textAlign={'center'}
                        fontWeight={'400'}
                        fontSize={'17px'}
                        lineHeight={'24px'}
                        color={"black"}
                    >5 million jobs for you to explore</Text>
                </Container>
                <Container
                    maxW={'100%'}
                >
                    <Flex
                        rounded='md' 
                        bg='white'
                        w={'auto'}
                        h={'auto'}
                        m={'auto'}
                        flexDirection={"column"}
                        borderRadius={'50px'}
                        p = {"20px"}
                        boxShadow={"3px 3px 20px rgba(0,0,0,0.1)"}
                    >
                        <Box>
                            <Box
                                w={'340px'}
                                h={'100%'}
                                pr={'12px'}
                                py={'4px'}
                                display={"flex"}
                            >
                                <Input border={'none'} color={"#8292b4"} placeholder='Enter skills / designations / companies' />
                                <Box
                                    w={'28px'}
                                    display={'flex'}
                                    alignItems={'center'}
                                    pl={"5px"}
                                >
                                    <Image mr={'8px'} w={'20px'} h={'20px'} src='https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg' />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                w={'223px'}
                                h={'100%'}
                                pr={'0px'}
                                pt={'4px'}
                                pb={'6px'}
                            >
                                <Select color={"#8292b4"} border={'none'} placeholder='Select experience'>
                                    <option value='option1'>Fresher (less than 1 year)</option>
                                    <option value='option2'>1 year</option>
                                    <option value='option3'>2 years</option>
                                    <option value='option3'>3 years</option>
                                    <option value='option3'>4 years</option>
                                    <option value='option3'>5 years</option>
                                    <option value='option3'>6 years</option>
                                    <option value='option3'>7 years</option>
                                    <option value='option3'>8 years</option>
                                    <option value='option3'>9 years</option>
                                    <option value='option3'>10 years</option>
                                    <option value='option3'>11 years</option>
                                    <option value='option3'>12 years</option>
                                    <option value='option3'>13 years</option>
                                    <option value='option3'>14 years</option>
                                    <option value='option3'>15 years</option>
                                    <option value='option3'>16 years</option>
                                    <option value='option3'>17 years</option>
                                    <option value='option3'>18 years</option>
                                    <option value='option3'>19 years</option>
                                    <option value='option3'>20 years</option>
                                    <option value='option3'>21 years</option>
                                    <option value='option3'>22 years</option>
                                    <option value='option3'>23 years</option>
                                    <option value='option3'>24 years</option>
                                    <option value='option3'>25 years</option>
                                    <option value='option3'>26 years</option>
                                    <option value='option3'>27 years</option>
                                    <option value='option3'>28 years</option>
                                    <option value='option3'>29 years</option>
                                    <option value='option3'>30 years</option>
                                </Select>
                            </Box>
                            <Box
                                py={'4px'}
                            >
                                <Input border={'none'} placeholder='Enter location' />
                            </Box>
                        </Box>
                        <Button
                            color={'white'}
                            fontWeight={'600'}
                            fontSize={'19px'}
                            bgColor={'#457eff'}
                            borderRadius={'50px'}
                            h={'48px'}
                            w={'120px'}
                            px={'28px'}
                            py={'11px'}
                            m={"0 auto"}
                        >Search</Button>
                    </Flex>
                </Container>
            </Box>
            <Box
                width={"60%"}
                position={"absolute"}
                bottom={"0"}
                right={"0"}
                zIndex={1}    
            >
                {/* <Image
                    src={banner}
                >
                    
                </Image> */}
                
                <Lottie 
                    zIndex={1} 
                    options={defaultOptions}
                />
            </Box>
        </Box>
        <JobInterest />
        <JobButton />
        <JobSlider />
        <FeatureCompony />
        <DiscoverJob />
    </Box>
  )
}

export default HomePage