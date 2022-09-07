import connection from "../connection"

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    limitDate:string,
    creatorUserId:string
    
    ) {
        await connection.insert({
            id,
            title,
            description,
            limit_date:limitDate,
            creator_user_id:creatorUserId
        }).into('TodoListTask')
    
}