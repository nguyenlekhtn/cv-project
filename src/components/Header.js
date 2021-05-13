import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faPaperPlane} size="6x" />;

function Header(props) {
  return (
    <div className="Header">
      {element}
      <h1>CV Builder App</h1>
    </div>
  );
}

export default Header;
