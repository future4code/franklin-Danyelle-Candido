import { useState } from "react";
import { Box } from "@mui/material";
import { useRequestData } from "../hooks/useRequestData";
import { SortNumber } from "./SortNumber";
import { themecolors } from "../constants/themecolors";
import { Nomesorteio, Menu,Opcoes ,Image , DataConc ,ConcursoSt} from "./styles";

export const HomePage = () => {
  const [loteriaAtual, setLoteriaAtual] = useState(0);
  const loterias = useRequestData([], "loterias");
  const loteriasconcursos = useRequestData([], "loterias-concursos");
  
  const onChangeLoteria = (event) => {
    setLoteriaAtual(event.target.value);
  }
  
  const getConcursoById = () => {

    const result = loteriasconcursos.find((concurso) => concurso.loteriaId == loteriaAtual)
    return result?.concursoId

  }
  const idConcurso = useRequestData({}, `concursos/${getConcursoById()}`)

  const NomeSorteio = () => {

    const result = loterias.find((loteria) => loteria?.id == loteriaAtual);
    return result?.nome;
  }

  const DataSorteio = (date) => {

    if(date){
      
        let result = date.split('T')
        result = new Date(result[0])
        result = new Intl.DateTimeFormat('pr-BR').format(result)
        return result

    } else {

        return date
    }
  }


  
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#D6D6D6'
      }}
    >
    <Box
      sx={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='613' height='1080' viewBox='0 0 613 1080' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M613 0C613 0 361.26 501.011 613 1080H0V0H613Z' fill='%23${themecolors[loteriaAtual].color}'/%3E%3C/svg%3E%0A")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
        minWidth: '500px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: "60px",
      }}
    >
      <form action="">
        {loterias && (
          <Menu>
            <Opcoes onChange={onChangeLoteria}>
              {loterias.map((loteria) => (
                <option key={loteria.id} value={loteria.id}>
                  {loteria.nome}
                </option>
              ))}
            </Opcoes>
          </Menu>
        )}
      </form>
      {loterias &&
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#FFFFFF",
          fontWeight: "bold",
        }}
      >
        <Image src={'https://i.imgur.com/9HlcDpg.png'} />
        <Nomesorteio>{NomeSorteio()}</Nomesorteio>
      </Box>}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <ConcursoSt>Concurso</ConcursoSt>
        {loterias && loteriasconcursos[0]?.concursoId &&
        <>
        <DataConc>{getConcursoById()} - {DataSorteio(idConcurso.data)}</DataConc>
        </>}
      </Box>
    </Box>
    <Box sx={{
      display: 'flex', 
      gap: '20px', 
      flexWrap: 'wrap', 
      justifyContent: 'center'}}
    >
        {idConcurso?.numeros && 
            idConcurso.numeros.map((numero) => <SortNumber key={numero} numero={numero} />)
        }
    </Box>
    </Box>
  );
};
