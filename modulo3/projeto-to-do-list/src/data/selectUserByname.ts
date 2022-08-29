import connection from "../connection"

export default async function selectUserByName(
    nickname:any
):Promise<any> {
    const result = await connection.raw(`
    SELECT id,nickname,email FROM TodoListUser u
    WHERE u.nickname =  ${nickname}
    `)

    return result[0] 
}