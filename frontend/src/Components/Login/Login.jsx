import React, { useState } from "react";
import { Box, Button, Center, Container, Divider, Flex, FormControl, FormLabel, Heading, Image, Input, Select, Text, keyframes,usePrefersReducedMotion } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";

// import "./Both.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "https://rich-puce-peacock-kilt.cyclic.app/api/users/login",
          {
            email,
            password,
          },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        console.log("user login succesfully done");
        toast.success("User Login Successfuly", {
          position: "top-center",
        });
        navigate("/mainhome");

        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        const FError = error.response.data.message;
        console.log(FError);
        toast.error(FError, {
          position: "top-center",
        });
        setLoading(false);
      }
    }
  }

  return (
    <Box
      m={0}
      p={"100px 10%"}
      w={"100%"}
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"end"}
      position={"relative"}
      bg={`
          radial-gradient(ellipse at top, #76afe4, transparent),
          radial-gradient(ellipse at bottom, #77e7af, transparent),
          radial-gradient(ellipse at left, #868fe5, transparent),
          radial-gradient(ellipse at right, #d683d2, transparent)
      `}
    >
      <Image
        src="https://static.naukimg.com/s/5/105/i/register.png"
        alt=""
        position={"absolute"}
        w={"40%"}
        left={"0"}
        bottom={"0"}
        zIndex={1}
      />
      <Box
        display={"grid"}
        gridTemplateColumns={"1fr 1fr"}
        gap={"30px"}
        p={"30px"}
        bgColor={"rgba(176, 195, 255, 0.8)"}
        boxShadow={"3px 3px 20px rgba(0,0,0,0.1)"}
        zIndex={2}
        borderRadius={"10px"}
      >
        <Box
          mr={"30px"}
          m={"0 auto"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <div>
            <Heading
              size={"2xl"}
              w={"fit-content"}
              m={"20px auto"}
            >
              New to us?
            </Heading>

            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> One
              click apply using profile.
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Get
              relevant job recommendations.
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} />{" "}
              Showcase profile to top companies and consultants.
            </p>
            <p>
              <DoneIcon style={{ color: "#4a90e2", marginTop: "2%" }} /> Know
              application status on applied jobs.
            </p>
          </div>
          <Button
            onClick={() => navigate("/signup")}
            m={"0 auto"}
            mt={"20px"}
          >
            Register For Free
          </Button>
        </Box>
        <Box
          h={"100%"}
          w={"100%"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            position={"absolute"}
            h={"fit-content"}
            m={"0 auto"}
            bgColor ={"white"}
            padding= {"20px"}
            borderRadius={"10px"}
            boxShadow={"3px 3px 20px rgba(0,0,0,0.4)"}
          >
            <Heading
              size={"2xl"}
              w={"fit-content"}
              m={"20px auto"}
              color={"#004cff"}
            >
              Log In
            </Heading>
            <form 
                  onSubmit={submitHandler}
            >
            <FormControl>
                <Flex
                  flexDirection={"column"}
                  mb={"10px"}
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    borderColor={"rgba(0,0,0,0.2)"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    placeholder="Enter Your email here "
                  />
                </Flex>
                <Flex
                  flexDirection={"column"}
                  mb={"10px"}
                > 
                  <Flex
                    h={"fit-content"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <FormLabel>Password</FormLabel>
                    <Button
                      _hover={{
                        color: "#004cff"
                      }}
                      onClick={() => setPassShow(!passShow)}
                      p={0}
                      m={0}
                      mb={"8px"}
                      bg="none"
                      h={"fit-content"}
                    >
                      {!passShow ? "Show" : "Hide"}
                    </Button>
                  </Flex>
                  <Box>
                    <Input
                      borderColor={"rgba(0,0,0,0.2)"}
                      type={!passShow ? "password" : "text"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      id="password"
                      placeholder="Enter Your password"
                    />
                  </Box>
                </Flex>
                <Button 
                  _hover ={{
                    color: "black",
                    bgColor: "white"
                  }}
                  mt={"20px"}
                  bgColor={"#004cff"}
                  color={"white"}
                  w={"100%"}
                  type="submit"
                >
                  Login
                </Button>
              </FormControl>
            </form>
            <Flex
              alignItems={"center"}
              m={"20px 0"}
            >
              <Divider
                borderColor={"rgba(0,0,0,0.5)"}
                m={"0 10px"}
              />
              <Text fontWeight={"600"}>Or</Text>
              <Divider
                borderColor={"rgba(0,0,0,0.5)"}
                m={"0 10px"}
              />
            </Flex>
            <Button>Login With OTP</Button>
            <Button >
              <Image
                height = {"22px"}
                mr={"10px"}
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                alt=""
              />
              Login With Google
            </Button>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Login;
