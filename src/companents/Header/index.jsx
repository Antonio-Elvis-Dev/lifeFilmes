import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Life Videos
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus Filmes
      </Link>
    </header>
  );
}
