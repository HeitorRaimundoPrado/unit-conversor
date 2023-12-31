import { ThemeContext } from "../../App";
import { useContext } from "react";
import "./Footer.css"

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <footer className={"footer footer-" + theme}>
      <a href="https://github.com/HeitorRaimundoPrado/unit-conversor">GitHub</a>
      <a className="middle-link" href="https://buy.stripe.com/cN27tl9oUeEvf7i3cc">Buy us a coffee</a>
      <a href="https://www.linkedin.com/in/heitor-prado-99767227b">Who am I</a>
    </footer>
  )
}

export default Footer;
