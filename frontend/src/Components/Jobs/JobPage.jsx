import { Box, Button, Flex, Heading, Input, Select, Text, Image, Container } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { BsFillStarFill} from 'react-icons/bs';

import jobData from "./jobData";

const jobdatas = jobData.map(job => {
  return (
    
      <Box key={job.id} mt='20px'  boxShadow= '3px 3px 20px rgba(0,0,0,0.4)'  mb='20px' p='20px' borderRadius={"10px"} >
        <Link color={"#004cff"} to={`/jobpage/${job.id}`}><Text fontSize='20px'><strong>{job.title}</strong></Text></Link>
        <h3>{job.subtitle}</h3>
        <Flex >
          <Box display='flex'  mr='20px'>
          <BsBag />
          <h2> {job.exp} years</h2>
          </Box>
          <Box  mr='20px' color='blue.400'>   ₹ Not closed</Box>
          <Box display='flex'  mr='20px'>
            <Box mt='2px' color='blue'> <CiLocationOn /></Box>
          
          <h2> {job.location}</h2>
          </Box>
        </Flex>
        <Box>{job.skill.map(skill => {
          return (
            <Text _hover={{bgColor: "#487df8", cursor: "pointer"}} transition={"0.2s ease-in-out"} display={"inline-block"} bgColor={"#1459f8"} color={"white"} borderRadius={"12px"} mr={"5px"} p={"3px 8px"} fontSize={"12px"} fontWeight={"600"}>
              {skill}
            </Text>
          )
        })}</Box>
      
      </Box> 
  );
});

const JobPage = () => {
  return (
    <Box p={"100px 10%"}>
      <Box display='grid' gap={"20px"} gridTemplateColumns={"65% 30%"} position={"relative"}>
        <Box>
          <Heading size={"2xl"} color={"#004cff"} fontWeight='bold' fontSize='20px'>{jobData.length} Jobs Based on your interest</Heading>
          {jobdatas}
        </Box>
        <Box position={"sticky"} top={"-10%"} h={"fit-content"}>
          <Heading size={"2xl"} color={"#004cff"} fontWeight='bold' fontSize='20px'> Search</Heading>
          <Box mt={"20px"} mb={"20px"} boxShadow= '3px 3px 20px rgba(0,0,0,0.4)' p = '20px' borderRadius={"10px"}>
            <Container
                maxW={'100%'}
            >
                <Flex
                    flexDirection={"column"}
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
                            </Select>
                        </Box>
                        <Box
                            py={'4px'}
                        >
                            <Input border={'none'} placeholder='Enter location' />
                        </Box>
                    </Box>
                    <Button
                        _hover ={{
                          bgColor: '#7ea2f7'
                        }}
                        transition={"0.2s ease-in-out"}
                        color={'white'}
                        fontWeight={'600'}
                        fontSize={'14px'}
                        bgColor={'#457eff'}
                        borderRadius={'30px'}
                        px={'14px'}
                        py={'8px'}
                        m={"0 auto"}
                    >Search</Button>
                </Flex>
            </Container>
          </Box>
          <Heading size={"2xl"} color={"#004cff"} fontWeight='bold' fontSize='20px'> Recommended courses for you</Heading>
          <Box mt={"20px"} mb={"20px"} boxShadow= '3px 3px 20px rgba(0,0,0,0.4)' p = '20px' borderRadius={"10px"}>
            <Text fontSize='12px'mb='30px'>Suggested Certifications to help you Earn Higher Salary, Better Jobs</Text>
            <Text fontSize='15px' fontWeight='bold'>Microsoft Office 2007 Bunder </Text>

            <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                  <BsFillStarFill
                      key={i}
                      color={i < 3 ? 'RGBA(0, 0, 0, 0.36)' : 'RGBA(0, 0, 0, 0.36)'}
                  />
                ))} (132 reviews)
              </Box>
              <Box p='20px' fontSize='14px' >
              <ul>
                <li>Microsoft Office 2007 is the Windows version of the Microsoft Office System, Microsofts productivity...</li>
                <li style={{marginTop:'15px'}}>With the help of Microsoft Office experts, you all learn valuable and time saving techniques for work...</li>
              </ul>  
              </Box>
              <Text fontSize='15px' fontWeight='bold'>Microsoft Excel for Data analyst </Text>

              <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                    <BsFillStarFill
                        key={i}
                        color={i < 3 ? 'RGBA(0, 0, 0, 0.36)' : 'RGBA(0, 0, 0, 0.36)'}
                    />
                    ))} (1341 reviews)
              </Box>
              <br/>
              <hr/>
            <Text mt='20px' fontWeight='bold' color='blue.500'>View All</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobPage;
