import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"
import Button from '@mui/material/Button';

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="ErrorPage">
        <h1>Error 404</h1>
        <Button variant='contained' color="primary" onClick={()=>goBack(navigate)}>voltar</Button>
    </div>
  );
}

export default ErrorPage;
