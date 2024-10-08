import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link className="black-link">Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="black-link" disabled>
            Sign In
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link className="black-link">Delivery</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="black-link" disabled>
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link className="black-link">Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="black-link" disabled>
            Payment
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link className="black-link">Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="black-link" disabled>
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
