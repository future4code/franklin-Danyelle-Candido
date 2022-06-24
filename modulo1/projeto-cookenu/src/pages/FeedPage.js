import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"

function FeedPage() {
  const navigate = useNavigate()

  return (
    <div className="FeedPage">
      <h1>Feed de Receitas</h1>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </div>
  );
}

export default FeedPage;