import connection from "../connection"

export default async function selectTask(
    id: string
):Promise<any> {
    const result = await connection.raw(`
    SELECT t.*, nickname FROM TodoListTask t
    JOIN TodoListUser u ON creator_user_id = u.id
    WHERE t.id = ${id}
    `)

    return result [0][0]
}