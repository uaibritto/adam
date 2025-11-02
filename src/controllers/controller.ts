export class Controller {
	async execute<T>(action: () => Promise<T>): Promise<T | undefined> {
		try {
			return await action()
		} catch (error) {
			console.error("Action failed:", error)
			throw error
		}
	}
}
