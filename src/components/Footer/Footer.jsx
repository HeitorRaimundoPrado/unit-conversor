import { ThemeContext } from "../../App";
import { useContext } from "react";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <footer className={"footer footer-" + theme}>
      <a href="#">GitHub</a>
      <a href="#">Who am I</a>
    </footer>
  )
}

export default Footer;
