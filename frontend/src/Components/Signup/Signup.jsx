import React, { useState } from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import FormHelperText from "@mui/material/FormHelperText";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BadgeIcon from "@mui/icons-material/Badge";
import { Checkbox } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./Both.css";
import { Box, Button, Flex, Heading, Input, Select, Text, Image, Container, FormControl, FormLabel, Divider } from "@chakra-ui/react";
const Signup = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);
  const navigate = useNavigate();

  // =============================================================================================================

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.warning("name is required!", {
        position: "top-center",
      });
    } else if (email === "") {
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
      alert("add password more than 6");
    } else if (confirmpassword === "") {
      toast.error("confirmPassword is required!", {
        position: "top-center",
      });
    } else if (confirmpassword.length < 6) {
      toast.error("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== confirmpassword) {
      toast.error("pass and conformPass are not matching!", {
        position: "top-center",
      });
    } else if (phone.length < 10) {
      toast.error("confirm phone must be 10 numbers!", {
        position: "top-center",
      });
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "https://rich-puce-peacock-kilt.cyclic.app/api/users",
          { name, email, password, phone, picture },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success("User Registered Successfuly ....", {
          position: "top-center",
        });

        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        const FError = error.response.data.message;
        console.log(FError);
        toast.success(FError, {
          position: "top-center",
        });
        setLoading(false);
      }
    }
  };
  const postDetails = (pics) => {
    if (!picture) {
      return setPicMessage("Please Select an image!.. ");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "shkoq3qc");
      data.append("cloud_name", "du3acgzcg");

      fetch("https://api.cloudinary.com/v1_1/du3acgzcg/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPicture(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <>
    <Box 
      p={"100px 0"}
      minH={"100vh"}
      display={"grid"}
      w={"100%"}
      gridTemplateColumns={"1fr 55% 1fr"}
      gap={"20px"}
      position={"relative"}
      bg={`
          radial-gradient(ellipse at top, #76afe4, transparent),
          radial-gradient(ellipse at bottom, #77e7af, transparent),
          radial-gradient(ellipse at left, #868fe5, transparent),
          radial-gradient(ellipse at right, #d683d2, transparent)
      `}
    >
      <Box
        position={"sticky"}
        top={"40vh"}
        h={"fit-content"}
        m={"10px"}
        p={"10px"}
        bgColor={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        borderRadius={"10px"}
        boxShadow={"3px 3px 20px rgba(0,0,0,0.3)"}
      >
        <Image
          h={"140px"}
          mt={"-70px"}
          mb={"10px"}
          src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
          alt=""
        />
        <Heading size={"1xl"} w={"fit-content"}>On Register You can</Heading>
        <Box>
          <Flex>
            <CheckCircleOutlineOutlinedIcon
              style={{ color: "#18c1a3", marginTop: "12px" }}
            />
            <Text
              style={{
                color: "#445578",
                lineHeight: "18px",
                fontSize: "17px",
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "5%",
              }}
            >
              Build your profile and let recruiters find you
            </Text>
          </Flex>
          <Flex>
            <CheckCircleOutlineOutlinedIcon
              style={{ color: "#18c1a3", marginTop: "12px" }}
            />
            <Text
              style={{
                color: "#445578",
                lineHeight: "18px",
                fontSize: "17px",
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "5%",
              }}
            >
              Build your profile and let recruiters find you
            </Text>
          </Flex>
          <Flex>
            <CheckCircleOutlineOutlinedIcon
              style={{ color: "#18c1a3", marginTop: "12px" }}
            />
            <Text
              style={{
                color: "#445578",
                lineHeight: "18px",
                fontSize: "17px",
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "5%",
              }}
            >
              Get job postings delivered right to your email
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box
      position={"relative"}
        h={"fit-content"}
        m={"10px"}
        p={"20px"}
        bgColor={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        borderRadius={"10px"}
        boxShadow={"3px 3px 20px rgba(0,0,0,0.3)"}
      >
        <Heading size={"2xl"} mb={"20px"}>
            Find a job & grow your career
        </Heading>
        <Button 
          w={"100%"}
          border={"1px solid rgba(0,0,0,0.2)"}
        >
          <Image
            height = {"22px"}
            mr={"10px"}
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            alt=""
          />
          Register With Google
        </Button>
        <Flex
          alignItems={"center"}
          m={"20px 0"}
          w={"100%"}
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
        <form 
          onSubmit={(e) => handleSubmit(e)}
          style={{
            width: '100%'
          }}
        >
          <FormControl>
              <FormLabel>Please Enter Full Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                placeholder="Enter Your Name"
                borderColor={"rgba(0,0,0,0.3)"}
                mb={"10px"}
              />
              <FormLabel>Email/username</FormLabel>
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="Email"
                placeholder="Enter Your email here "
                borderColor={"rgba(0,0,0,0.3)"}
                mb={"10px"}
              />
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
                    borderColor={"rgba(0,0,0,0.3)"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={!passShow ? "password" : "text"}
                    name="password"
                    id="password1"
                    placeholder="Enter Your password"
                  />
                </Box>
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
                  <FormLabel>Confirm Password</FormLabel>
                  <Button
                    _hover={{
                      color: "#004cff"
                    }}
                    onClick={() => setCPassShow(!cpassShow)}
                    p={0}
                    m={0}
                    mb={"8px"}
                    bg="none"
                    h={"fit-content"}
                  >
                    {!cpassShow ? "Show" : "Hide"}
                  </Button>
                </Flex>
                <Box>
                  <Input
                    borderColor={"rgba(0,0,0,0.3)"}
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={!cpassShow ? "password" : "text"}
                    name="cpassword"
                    id="password"
                    placeholder="Enter Your password"
                  />
                </Box>
              </Flex>
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                id="number"
                placeholder="Enter Your Mobile Number "
                borderColor={"rgba(0,0,0,0.3)"}
                mb={"10px"}
              />
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
                Register
              </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
    <ToastContainer />
    </>
    
  );
};

export default Signup;
