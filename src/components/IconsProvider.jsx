import { FaCrosshairs, FaGun, FaUserTie } from "react-icons/fa6";
import { IoMapSharp } from "react-icons/io5";

function IconsProvider({ index }) {
  if (index == 0) {
    return <FaGun />;
  }
  if (index == 1) {
    return <FaCrosshairs />;
  }
  if (index == 2) {
    return <IoMapSharp />;
  }
  if (index == 3) {
    return <FaUserTie />;
  }
}

export default IconsProvider;
