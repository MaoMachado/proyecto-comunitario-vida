import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("tema-oscuro", oscuro);
  }, [oscuro]);

  return (
    <nav className="navbar">
      {/* Links de Router */}
      <Link className="navbar__link" to="/">
        Inicio
      </Link>
      <Link className="navbar__link" to="/respuestas">
        Respuestas
      </Link>
      <Link className="navbar__link" to="/mentefacto">
        Mentefacto
      </Link>

      <button className="navbar__tema" onClick={() => setOscuro(!oscuro)}>
        {oscuro ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
