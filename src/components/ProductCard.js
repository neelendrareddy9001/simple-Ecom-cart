import React from "react";
import { Button, Card } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useCart } from "react-use-cart";

const ProductCard = (props) => {
  let { image, price, title } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const addToCart = () => {
    addItem(props.data);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px*180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build onn the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go Somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
