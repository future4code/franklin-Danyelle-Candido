import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/baseurl'

export const useRequestData = (dataType, type) => {
  const [data, setData] = useState(dataType)

  useEffect(() => {
    axios.get(`${BASE_URL}/${type}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [type])

  return (data)
}
