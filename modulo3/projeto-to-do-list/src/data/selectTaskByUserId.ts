import connection from "../connection"

export default async function selectTaskByUserId(
    id:any
):Promise<any> {
    const result = await connection.raw(`
    SELECT nickname ,t.* FROM TodoListTask t
    JOIN TodoListUser u ON creator_user_id = u.id
    WHERE u.id =  ${id}
    `)

    return result[0] 
}