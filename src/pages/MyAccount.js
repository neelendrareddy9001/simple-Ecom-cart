import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Image,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import Heading from "../components/Heading";

const MyAccount = () => {
  return (
    <>
      <Container className="py-5 mt-5">
        <Heading heading="My Account" />
      </Container>
    </>
  );
};

export default MyAccount;
