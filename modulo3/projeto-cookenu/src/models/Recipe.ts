export interface IRecipeDB {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    authorId: string
}
export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private createdAt: string,
        private authorId: string
    ) { }

    public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getDescription = () => {
        return this.description
    }

    public getCreatedAt = () => {
        return this.createdAt
    }

    public getAuthorId = () => {
        return this.authorId
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setTitle = (newTitle: string) => {
        this.title = newTitle
    }

    public setDescription = (newDescription: string) => {
        this.description = newDescription
    }

    public setCreatedAt = (newCreatedAt: string) => {
        this.createdAt = newCreatedAt
    }

    public setAuthorId = (newAuthorId: string) => {
        this.authorId = newAuthorId
    }


}

export interface RecipeInputDTO {
    title: string,
    description: string,
    token: string
}
