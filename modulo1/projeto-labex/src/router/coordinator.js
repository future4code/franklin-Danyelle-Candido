import React from "react";

export const goToLogin = (navigate)=>{
    navigate('/login')
  } 

export const goToProducts = (navigate)=>{
    navigate('/trips')
  } 

export const goBack = (navigate) =>{
    navigate(-1)
  }

export const goToCreateTrip = (navigate) =>{
    navigate('/adm/createtrip')
  }

export const goToDetailsTrip1 = (navigate) =>{
    navigate('/adm/detailstrips/1')
  }

export const goToDetailsTrip2 = (navigate) =>{
    navigate('/adm/detailstrips/2')
  }

export const goToAdmArea = (navigate) =>{
    navigate('/adm')
  }

export const goSingUp = (navigate) =>{
    navigate('/trips/application')
  }