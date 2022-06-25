import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"
import Button from '@mui/material/Button';

function FeedPage() {
  const navigate = useNavigate()

  return (
    <div className="FeedPage">
      <h1>Feed de Receitas</h1>
      <Button variant='contained' color="primary" onClick={()=>goBack(navigate)}>voltar</Button>
    </div>
  );
}

export default FeedPage;