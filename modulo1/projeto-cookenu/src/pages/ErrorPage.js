import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="ErrorPage">
        <h1>Error 404</h1>
        <button onClick={()=>goBack(navigate)}>voltar</button>
    </div>
  );
}

export default ErrorPage;
