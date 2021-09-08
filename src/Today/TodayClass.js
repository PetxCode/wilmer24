import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeScreen from "../components/HomeScreen";
import CancelIcon from "@material-ui/icons/Cancel";
import moment from "moment";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const TodayClass = ({ r, Greet, quote, setQuote }) => {
  const [quote, setQuote] = useState([
    {
      id: 1,
      name: "Peter",
      myQuote: "This is the day that the Lord has Made.",
      time: Date.now(),
      avatar: img1,
    },
    {
      id: 2,
      name: "Mr Joe",
      myQuote: "I will rejoice and be glad in it...!",
      time: Date.now(),
      avatar: img2,
    },
    {
      id: 3,
      name: "Mr Sam",
      myQuote: "Let's practice out our Code 10times per day, at least!!!",
      time: Date.now(),
      avatar: img3,
    },
  ]);

  const deleteItem = (id) => {
    const removeItem = quote.filter((el) => el.id !== id);
    setQuote(removeItem);
  };

  // useEffect(() => {
  //   const saveItem = JSON.parse(localStorage.getItem("storage"));
  //   setQuote(saveItem);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("storage", JSON.stringify(quote));
  // }, [quote]);

  return (
    <Container>
      <Wrapper>
        {quote?.map(({ id, time, name, avatar, myQuote }) => (
          <Card key={id}>
            <TopBox>
              <Cancel
                onClick={() => {
                  deleteItem(id);
                  console.log("I am Pressed");
                  console.log(id);
                }}
              >
                <CancelIcon />
              </Cancel>
              <Image src={avatar} />
            </TopBox>
            <InnerBox>
              <Name>{name}</Name>
              <Quote>{myQuote}</Quote>
              <Time>{moment(time).fromNow()}</Time>
            </InnerBox>
          </Card>
        ))}
      </Wrapper>
      <div>{Greet}</div>
      <div>Hello</div>
    </Container>
  );
};

export default TodayClass;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;
const Display = styled.img`
  object-fit: cover;
  width: 250px;
  height: 200px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgb(255 54 50 / 69%) 0px 16px 30px -10px,
    rgb(0 0 0 / 13%) 0px 16px 10px -10px;
`;
const MyButton = styled(Button)`
  width: 300px;
  margin: 10px 0;
  margin-top: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;
const MyInputs = styled(Input)`
  margin: 10px 0;
`;
const MyInputsArea = styled(TextArea)`
  margin: 10px 0;
  height: 60px;
  resize: none;
`;

const InputsValue = styled.div`
  width: 300px;
`;

const DisplayHolder = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
`;

const InnerBox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
`;
const Name = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Quote = styled.div`
  flex: 1;
  width: 70%;
  text-align: center;
  font-size: 14px;
`;
const Time = styled.div`
  font-size: 10px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const Card = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  height: 300px;
  width: 250px;
  transition: all 350ms;
  transform: scale(1);
  margin: 10px;

  :hover {
    border: 1px solid lightgray;
    transform: scale(1.01);
  }
`;
const TopBox = styled.div`
  height: 100px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
  position: relative;
`;
const Cancel = styled.div`
  color: red;
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
  font-weight: bold;
  transform: scale(1);
  transition: all 360ms;
  opacity: 0.7;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  background-color: white;
  border-radius: 50%;
  right: 0;
  margin-top: 50px;
  object-fit: cover;
  border: 4px solid white;
`;

const Container = styled.div`
  background-color: #22272e;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: white;
  padding-top: 60px;
  font-family: Poppins;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
