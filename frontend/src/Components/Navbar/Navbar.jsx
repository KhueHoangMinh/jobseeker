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
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const employers = useDisclosure();
  const jobs = useDisclosure();
  const companies = useDisclosure();
  const services = useDisclosure();
  const [navBg,setNavBg] = useState(true);
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  window.addEventListener("scroll", () => {
    if(props.trans) {
      if(window.scrollY > 10) {
        if(!navBg) setNavBg(true);
      } else {
        if(navBg) setNavBg(false);
      }
    } else if (!navBg) setNavBg(true);
  })

  useEffect(()=>{
    setNavBg(!props.trans);
  },[props.trans])

  const MenuBox = () => {
    <Box
      h={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      fontWeight={"500"}
      lineHeight={"20px"}
      color={"#445578"}
      cursor={"pointer"}
    ></Box>
  }

  const MenuButtonNew = (props) => (
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
      onMouseEnter={props.disclosure.onOpen} 
      onMouseLeave={props.disclosure.onClose}
      onClick={()=>navigate(props.dest)}
    >
      {props.text}
    </MenuButton>
  )

  const MenuMainItem = (props) => (
    <MenuItem
      fontWeight={"600"}
      fontSize={"17px"}
      color={"#1b2437"}
      cursor={"default"}
    >
      {props.text}
    </MenuItem>
  )

  const MenuSubItem = (props) => (
    <MenuItem
      _hover={{
        color: "#457eff",
      }}
      fontWeight={"500"}
      color={"#445578"}
    >
      {props.text}
    </MenuItem>
  )

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
              <MenuButtonNew
                as={Button}
                disclosure={jobs}
                dest="/jobpage"
                text="Jobs"
              />
              <MenuList 
                boxShadow={"3px 3px 25px rgba(0,0,0,0.3)"}
                onMouseEnter={jobs.onOpen} 
                onMouseLeave={jobs.onClose}
              >
                <MenuMainItem text = "Popular Categories"/>
                <MenuSubItem text = "IT jobs"/>
                <MenuSubItem text = "Sales jobs"/>
                <MenuSubItem text = "Marketing jobs"/>
                <MenuSubItem text = "Data Science "/>
                <MenuSubItem text = "HR jobs"/>
                <MenuSubItem text = "Engineering "/>
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
            <Menu isOpen={companies.isOpen}>
              <MenuButtonNew
                as={Button}
                disclosure={companies}
                dest="/companies"
                text="Companies"
              />
              <MenuList
                boxShadow={"3px 3px 25px rgba(0,0,0,0.3)"}
                onMouseEnter={companies.onOpen}
                onMouseLeave={companies.onClose}
              >
                <MenuMainItem text = "Explore Categories"/>
                <MenuSubItem text = "Unicorn"/>
                <MenuSubItem text = "MNC"/>
                <MenuSubItem text = "Startup"/>
                <MenuSubItem text = "Product Based"/>
                <MenuSubItem text = "Internet"/>
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
              
              <MenuButtonNew
                as={Button}
                disclosure={services}
                dest="/services"
                text="Courses"
              />
              <MenuList
                boxShadow={"3px 3px 25px rgba(0,0,0,0.3)"}
                onMouseEnter={services.onOpen}
                onMouseLeave={services.onClose}
              >
                <MenuMainItem text = "Explore course"/>
                <MenuSubItem text = "IT"/>
                <MenuSubItem text = "Sales"/>
                <MenuSubItem text = "Marketing"/>
                <MenuSubItem text = "Data Science"/>
                <MenuSubItem text = "HR"/>
                <MenuSubItem text = "Engineering"/>
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
          {
            user?
            <>
              <Text
                mr={"5px"}
                fontWeight={"600"}
              >
                {user.displayName}
              </Text>
              <Image
                src={user.image}
                alt=""
                h={"40px"}
                w={"40px"}
                border={"2px solid rgba(0,0,0,0.3)"}
                borderRadius={"50%"}
              />
            </> :
            <>
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
            </>
          }
          
          <Divider borderColor={"#445578"} orientation="vertical" h={"30%"} />
          <Menu isOpen={employers.isOpen}>
            
              <MenuButtonNew
                as={Button}
                disclosure={employers}
                dest="/employer"
                text="For employers"
              />
            <MenuList
              onMouseEnter={employers.onOpen}
              onMouseLeave={employers.onClose}
            >
              <MenuSubItem text = "Hiring solutions"/>
              <MenuSubItem text = "Employer Login"/>
            </MenuList>
          </Menu>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Navbar;
