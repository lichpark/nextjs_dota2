import { headerStyle } from "../style/HeaderStyle";

const Header = ({ children }) => {
  return (
    <header
      className={headerStyle.headerstyle}
      style={{ position: "fixed", zIndex: "1" }}
    >
      {children}
    </header>
  );
};

export default Header;
