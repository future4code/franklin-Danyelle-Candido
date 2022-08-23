import connection from "../connection"

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    status:string,
    limit_date:string,
    creator_user_id:string
    
    ) {
        await connection.insert({
            id,
            title,
            description,
            status,
            limit_date,
            creator_user_id
        }).into('TodoListUser')
    
}