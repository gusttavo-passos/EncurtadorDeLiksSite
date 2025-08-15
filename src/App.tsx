import { useState } from "react";
import { GiCapybara } from "react-icons/gi";

import type { LinkResponse } from "./services/link.service";
import LinkForm from "./components/link-form";

import "./styles/App.css";
import Navbar from "./components/nav-bar";
import LoadingSpinner from "./components/loading-spinner";

function App() {
  const [dataLink, setLink] = useState<LinkResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <div className="app-container">
      <Navbar />
      <h1>
        CapyCom Links <GiCapybara size={40} />
      </h1>

      <div className="card">
        {isLoading ? <LoadingSpinner /> :<>
          <LinkForm getLinkCreated={dataLink} onLinkCreated={setLink} setIsLoading={setIsLoading} />
        </> 
        }
        <p className="info-text">Encurte seus Links de Graça! 🔗</p>
      <a className="read-the-docs" href="https://capy-com.vercel.app/">👉 Conheça mais sobre a Capycom!</a>
      </div>

    </div>
  );
}

export default App;
