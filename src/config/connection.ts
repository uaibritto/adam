import { SQL } from "bun"

export const connection = new SQL("sqlite://data.db")

export const db = {
	query: connection,
	mutation: connection,
}
