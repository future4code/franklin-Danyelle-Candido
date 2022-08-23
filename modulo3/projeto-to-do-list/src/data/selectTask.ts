import connection from "../connection"

export default async function selectTask(
    id: string
) {
    const result = await connection('TodoListTask')
    .select('*')
    .where({ id })

    return result[0]
}