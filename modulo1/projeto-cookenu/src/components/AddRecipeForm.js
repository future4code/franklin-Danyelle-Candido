import React, {useState} from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import { InputsContainer, AddRecipeFormContainer } from '../pages/AddRecipePage/styled'
import useForm from '../hooks/useForms'
import {createRecipe} from "../services/recipe"
import {CircularProgress} from '@mui/material'

const AddRecipeForm = () => {
  const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createRecipe(form, clear, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={'Descrição'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            name={"image"}
            value={form.image}
            onChange={onChange}
            label={'Foto'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar Receita</>}
        </Button>
      </AddRecipeFormContainer>
    </form>
  )
}

export default AddRecipeForm;