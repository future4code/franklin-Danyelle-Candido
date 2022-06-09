import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'


//estilizando componentes
const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`


function App() {
  const [tarefas, setTarefa] = useState([{
    id: Math.random(), 
    texto: 'Texto da tarefa',
    completa: false 
  },
  {
    id: Math.random(), 
    texto: 'Texto da segunda tarefa',
    completa: true 
  }
]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")
  //declarando meus estados 

/*   useEffect() => {
    () => {

    },
    []
  };

  useEffect() => {
    () => {

    },
    []
  }; */

  onChangeInput = (event) => {
    setTarefa(event.target.value);
  }

  const clean=()=>{
    setInputValue('');
  }

  criaTarefa = () => {
    const novaTarefa ={
      id: Math.random(), 
      texto: inputValue,
      completa: false
    };

    const novaLista = [...tarefas, novaTarefa];

    setTarefa(novaLista);
    clean();

  }

  selectTarefa = (id) => {
      
  }

  onChangeFilter = (event) => {
    setFiltro(event.target.value);
  }

 
    const listaFiltrada = tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });
    //filtrando as tarefas incluidas pendente e completas
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input /*incluindo tarefa*/value={inputValue} onChange={onChangeInput}/>
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label /*incluindo um filtro de pendente ou completa*/>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }


export default App