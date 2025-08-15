import { useState, type ChangeEvent } from "react";
import { FiCopy } from "react-icons/fi";

import LinkService, { type LinkResponse } from "../services/link.service";
import type UserEntity from "../entities/user.entity";

import "./styles/link-form.css"

interface LinkFormProps {
  onLinkCreated: (link: LinkResponse) => void;
  getLinkCreated: LinkResponse | null
}

const linkService = new LinkService();

export default function LinkForm({ onLinkCreated, getLinkCreated }: LinkFormProps) {
  const [data, setData] = useState<UserEntity>({
    key: "key",
    link: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newLink = await linkService.createLink({
        url: data.link,
        userId: data.key
      });
      onLinkCreated(newLink);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const copyToClipboard = () => {
    if(getLinkCreated){
      navigator.clipboard.writeText(getLinkCreated.link.shortUrl);
    }
  };

  return (
    <>
    <form className="link-form" onSubmit={handleSubmit}>
      <label htmlFor="link">Link:</label>
      <input
        type="text"
        id="link"
        name="link"
        placeholder="Insira o Seu Link Aqui!"
        value={data.link}
        onChange={handleInputChange}
        />

      <button type="submit">
        Encurtar Link
      </button>
    </form>
      {getLinkCreated?.link && (
        <div className="copy-container">
          <input type="text" value={getLinkCreated.link.shortUrl} readOnly />
          <button className="copy-btn" onClick={copyToClipboard}>
            <FiCopy size={20} />
          </button>
        </div>
      )}
      </>
  );
}

    {/* 
          <label htmlFor="key">Digite uma Chave:</label>
          <input
          type="text"
          id="key"
          name="key"
          placeholder="Insira uma chave Aqui!"
          value={data.key}
          onChange={handleInputChange}
          /> */}

