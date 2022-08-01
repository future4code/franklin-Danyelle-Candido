import {countries} from "./countries.js"

const query = process.argv[2]

const result = countries.filter(
    country => country.continent.toLowerCase().includes(query)
)

console.table(result)
