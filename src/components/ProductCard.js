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
    <Card
      style={{ width: "18rem" }}
      className={`${
        theme ? "bg-light text-black" : "bg-light text-dark"
      } text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>
          Rs.<span className="h3">{price}</span>
        </Card.Title>
        <Button variant="primary">Go Somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
