import { ThemeContext } from "../../App";
import { useContext } from "react";
import "./Footer.css"

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
