import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "";

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const operation = async (params) => {
    try {
      setLoading(true);
      const result = await axios.request(params);
      setResponse(result.data);
      setError("");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, operation };
};
