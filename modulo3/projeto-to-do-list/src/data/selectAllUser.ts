import connection from "../connection"

export default async function selectAllUsers() {
    const result = await connection.raw(`
    SELECT id, name FROM TodoListUser
  `)

    return result[0]
}