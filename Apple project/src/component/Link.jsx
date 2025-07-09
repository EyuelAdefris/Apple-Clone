import "../style/link.css";
import { Button } from "react-bootstrap";

function link() {
  return (
    <div className="cta-buttons">
      <Button variant="outline-primary" className="learn-more-btn">
        Learn more
      </Button>
      <Button variant="outline-primary" className="buy-now">
        Buy
      </Button>
    </div>
  );
}

export default link;
