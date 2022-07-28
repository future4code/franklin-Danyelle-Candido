import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useRequestData = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.respose.status === 404) {
          navigate("/404");
        }
      });
  }, [url, navigate]);

  return [data];
};

export default useRequestData;
