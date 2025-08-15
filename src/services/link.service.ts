import axios from "axios";

const urlApi = "https://encurtadordelinksapi.onrender.com/";

export interface CreateLinkPayload {
  url: string;
  userId: string;
}

export interface LinkResponse {
  link: {
    id: string;
    userId: string;
    url: string;
    shortUrl: string;
    createdAt: string;
  }
}

export default class LinkService {
  
  async createLink(data: CreateLinkPayload): Promise<LinkResponse> {
    const result = await axios.post(urlApi + "link/", data);
    return result.data;
  };
}

