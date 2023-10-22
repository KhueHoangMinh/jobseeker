import { Container,Box,Image,Text, Flex} from '@chakra-ui/react'
import React from 'react'

const DiscoverJob = () => {
  return (
   
      <Box width='80%' borderRadius={"10px"} height='400px' margin='auto' my={20} bgColor={"rgba(0,0,0,0.2)"}>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          height='100%'
        >
          <Box width='40%' >
            <Text fontSize={30} fontWeight='bold'>Discover jobs across popular roles</Text>
            <Text className='littlewhite' fontSize={20}>Select a role and we'll show you relevant jobs for it!</Text>
            <Image mt={"10px"} src='https://static.naukimg.com/s/0/0/i/role-collection.png' height={100}/>
          </Box>
          <Box
            h={"110%"}
            boxShadow={"3px 3px 20px rgba(0,0,0,0.3)"}
          >
            <Box border='1px solid RGBA(0, 0, 0, 0.5)' h='100%' width='600px' borderRadius='10px' bg='white'>
              <Flex justifyContent='space-around'> 
                  <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px'
                    _hover={{
                      
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <Text> Full Stack Developer</Text>  
                    <Text>23.9K+ jobs</Text>
                  </Box>
                  <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px'
                    _hover={{
                    
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}>
                    <Text> Full Stack Developer</Text>  
                    <Text>23.9K+ jobs</Text>
                  </Box>
                </Flex> 
                <Flex justifyContent='space-around' mb={10}> <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%'
                  _hover={{
                  
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }} p={4} borderRadius='10px'>
                    <Text> Full Stack Developer</Text>  
                    <Text>23.9K+ jobs</Text>
                  </Box>
                  <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px' 
                    _hover={{
                  
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}>
                    <Text> Full Stack Developer</Text>  
                    <Text>23.9K+ jobs</Text>
                  </Box>
                </Flex> 
                <Flex justifyContent='space-around' mb={10}> <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px' 
                  _hover={{
                  
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}>
                    <Text> Full Stack Developer</Text>  
                    <Text>23.9K+ jobs</Text>
                  </Box>
                  <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px' 
                  _hover={{
                
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}>
                    <Text> Full Stack Developer</Text>  
                    <Text>23.9K+ jobs</Text>
                  </Box>
                </Flex> 
            </Box>
          </Box>
        </Flex>
      </Box>

  )
}

export default DiscoverJob