import React from "react";

export const goToLogin = (navigate)=>{
    navigate('/login')
  } 

export const goToProducts = (navigate)=>{
    navigate('/trips/list')
  } 

export const goBack = (navigate) =>{
    navigate(-1)
  }

export const goToCreateTrip = (navigate) =>{
    navigate('/admin/trips/create')
  }

export const goToDetailsTrip1 = (navigate) =>{
    navigate('/admin/trips/1')
  }

export const goToDetailsTrip2 = (navigate) =>{
    navigate('/admin/trips/2')
  }

export const goToAdmArea = (navigate) =>{
    navigate('/admin/trips/list')
  }

export const goSingUp = (navigate) =>{
    navigate('/trips/application')
  }