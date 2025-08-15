import { useState } from "react";
import { GiCapybara } from "react-icons/gi";

import type { LinkResponse } from "./services/link.service";
import LinkForm from "./components/link-form";

import "./styles/App.css";
import Navbar from "./components/nav-bar";

function App() {
  const [dataLink, setLink] = useState<LinkResponse | null>(null);

  return (
    <div className="app-container">
      <Navbar />
      <h1>
        CapyCom Links <GiCapybara size={40} />
      </h1>

      <div className="card">
        <LinkForm getLinkCreated={dataLink} onLinkCreated={setLink} />
        <p className="info-text">Encurte seus Links de Graça! 🔗</p>
      <a className="read-the-docs" href="https://capy-com.vercel.app/">👉 Conheça mais sobre a Capycom!</a>
      </div>

    </div>
  );
}

export default App;
