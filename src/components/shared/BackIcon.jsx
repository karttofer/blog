import { Link } from "react-router-dom";

import backIcon from "../../assets/back-icon.svg";

const BackIcon = ({ text }) => {
  return (
    <Link to="/" className="back-icon">
      <img src={backIcon} alt="back icon" />
      {text}
    </Link>
  );
};

export default BackIcon;
