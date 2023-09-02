import React from "react";
import { Button, Card } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useCart } from "react-use-cart";
import { BsCart } from "react-icons/bs";
import { Link } from "@reach/router";

const ProductCard = (props) => {
  let { images, price, title, id } = props.data;
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
      <Link to={`/product-details/${id}`}>
        <div
          style={{
            background: "white",
            height: "15rem",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "inherit",
          }}
        >
          <Card.Img variant="top" src={images} />
        </div>
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>
          Rs.<span className="h3">{price}</span>
        </Card.Title>
        <Button
          variant="primary"
          onClick={() => addToCart()}
          className={`${
            theme ? "bg-dark-primary text-black" : "bg-light-primary"
          } d-flex align-items-center m-auto border-0`}
        >
          <BsCart size="1.6rem" style={{ marginRight: "8px" }} />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
