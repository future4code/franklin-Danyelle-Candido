//exercício 2 -tipo
type task= {
  id: number,
  title: string,
  completed: boolean
}

type user= {
id: number,
name:string,
Tasklist: task[]
}

//exo3
  export const people:user[] = [
    {
       id: 1,
       name:'Maria Do Bairro',
       Tasklist: [
            {
              id: 1,
              title: "Limpar a Casa",
              completed: true
            },
            {
              id: 2,
              title: "chorar e sofrer",
              completed: false
            },
            {
              id: 3,
              title: "se apaixonar",
              completed: true
            }
        ]
    },
    {
      id: 2,
      name:'Carminha',
      Tasklist: [
        {
          id: 1,
          title: "colocar um look branco",
          completed: true
        },
        {
          id: 2,
          title: "pintar os cabelos ",
          completed: false
        },
        {
          id: 3,
          title: "dar um golpe",
          completed: true
        }
    ]
    },
    {
      id: 3,
      name:'Beth a Feia',
      Tasklist: [
        {
          id: 1,
          title: "fofocar com as secretarias",
          completed: true
        },
        {
          id: 2,
          title: "se apaixonar pelo seu armando",
          completed: false
        },
        {
          id: 3,
          title: "ficar linda",
          completed: true
        }
    ]
    },
]