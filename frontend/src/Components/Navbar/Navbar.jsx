import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  textDecoration,
  useDisclosure,
} from "@chakra-ui/react";
import mainlogo from "../../Components/req/jobpandacom-logo.png";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const employers = useDisclosure();
  const jobs = useDisclosure();
  const companies = useDisclosure();
  const services = useDisclosure();
  const [navBg,setNavBg] = useState(false);
  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    if(props.trans) {
      if(window.scrollY > 10) {
        if(!navBg) setNavBg(true);
      } else {
        if(navBg) setNavBg(false);
      }
    }
  })

  useEffect(()=>{
    if(!props.trans) {
      setNavBg(true);
    }
  },[])

  return (
    <Box
      as={Container}
      zIndex={"100"}
      top={"0"}
      maxW={"100%"}
      h={"72px"}
      position={"fixed"}
      bgColor={navBg ? "white" : "transparent"}
      boxShadow={navBg ? "0 3px 20px rgba(0,0,0,0.3)" : "none"}
      mb="150px"
      transition={"0.2s ease-in-out"}
    >
      <Grid
        display={"grid"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        w={"80%"}
        h={"100%"}
        m={"auto"}
        position={"relative"}
      >
        <Stack
          display={"flex"}
          direction={"row"}
          w={"100%"}
          h={"100%"}
          justifyContent={"start"}
        >
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            <Menu isOpen={jobs.isOpen}>
              <MenuButton
                _hover={{
                  background: "none",
                  border: "none",
                  textDecoration: "none",
                }}
                border={"none"}
                bgColor={"transparent"}
                as={Button}
                color={"black"}
                padding={"0 10px"}
                onMouseEnter={jobs.onOpen} 
                onMouseLeave={jobs.onClose}
                onClick={()=>navigate("/jobpage")}
              >
                Jobs
              </MenuButton>
              <MenuList 
                boxShadow={"3px 3px 25px rgba(0,0,0,0.3)"}
                onMouseEnter={jobs.onOpen} 
                onMouseLeave={jobs.onClose}
              >
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Popular Categories
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  IT jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Sales jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Marketing jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Data Science jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  HR jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Engineering jobs
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            <Menu isOpen={companies.isOpen}>
              <MenuButton
                onClick={() => navigate("/companies")}
                _hover={{
                  background: "white",
                  border: "none",
                }}
                padding={"0 10px"}
                border={"none"}
                bgColor={"transparent"}
                as={Button}
                onMouseEnter={companies.onOpen}
                onMouseLeave={companies.onClose}
                color={"black"}
              >
                Companies
              </MenuButton>
              <MenuList
                boxShadow={"3px 3px 25px rgba(0,0,0,0.3)"}
                onMouseEnter={companies.onOpen}
                onMouseLeave={companies.onClose}
              >
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Explore Categories
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Unicorn
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  MNC
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Startup
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Product Based
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Internet
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            <Menu isOpen={services.isOpen}>
              <MenuButton
                _hover={{
                  background: "white",
                  border: "none",
                }}
                padding={"0 10px"}
                border={"none"}
                bgColor={"transparent"}
                as={Button}
                color={"black"}
                onMouseEnter={services.onOpen}
                onMouseLeave={services.onClose}
                onClick={()=>navigate("/services")}
              >
                Services
              </MenuButton>
              <MenuList
                boxShadow={"3px 3px 25px rgba(0,0,0,0.3)"}
                onMouseEnter={services.onOpen}
                onMouseLeave={services.onClose}
              >
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Resume Writing
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Visual Resume
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Resume critique
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Text Resume
                </MenuItem>
                <br />
                <MenuItem
                  fontWeight={"600"}
                  fontSize={"17px"}
                  color={"#1b2437"}
                  cursor={"default"}
                >
                  Find Jobs
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Jobs4u
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Priority applicant
                </MenuItem>
                <MenuItem
                  _hover={{
                    color: "#457eff",
                  }}
                  fontWeight={"500"}
                  color={"#445578"}
                >
                  Contact us
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Stack>
        <Box
          w={"100%"}
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
        >
          <Link to="/">
            <Image
              h={"30px"}
              src={mainlogo}
              alt="Logo"
              alignItems={"center"}
              cursor={"pointer"}
            />
          </Link>
        </Box>
        <Stack
          display={"flex"}
          direction={"row"}
          h={"100%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            border={"1px"}
            borderColor={"#004cff"}
            borderRadius={"50px"}
            color={"#004cff"}
            bg={"transparent"}
            h={"40px"}
            w={"80px"}
            fontWeight={"600"}
            onClick={()=>navigate("/login")}
          >
            Login
          </Button>
          <Button
            _hover={{
              color: "#004cff",
              bgColor: "white"
            }}
            border={"none"}
            borderRadius={"50px"}
            color={"white"}
            bgColor={"#004cff"}
            w={"100px"}
            onClick={()=>navigate("/signup")}
          >
            Register
          </Button>
          <Divider borderColor={"#445578"} orientation="vertical" h={"30%"} />
          <Menu isOpen={employers.isOpen}>
            <MenuButton
              _hover={{
                background: "white",
                border: "none",
              }}
              border={"none"}
              bgColor={"transparent"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              onMouseEnter={employers.onOpen}
              onMouseLeave={employers.onClose}
              color={"black"}
            >
              For employers
            </MenuButton>
            <MenuList
              onMouseEnter={employers.onOpen}
              onMouseLeave={employers.onClose}
            >
              <MenuItem
                _hover={{
                  color: "#457eff",
                }}
                fontWeight={"500"}
                color={"#445578"}
              >
                Buy online
              </MenuItem>
              <MenuItem
                _hover={{
                  color: "#457eff",
                }}
                fontWeight={"500"}
                color={"#445578"}
              >
                Hiring solutions
              </MenuItem>
              <MenuItem
                _hover={{
                  color: "#457eff",
                }}
                fontWeight={"500"}
                color={"#445578"}
              >
                Employer Login
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Navbar;
