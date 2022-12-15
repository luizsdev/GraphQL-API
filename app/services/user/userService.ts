import UserInput from '../../inputs/userInput';
import { UserModel } from '../../models/user/userModel';

class UserService {
	constructor(public repository: UserModel) {}

	async create(userInput: UserInput) {
		return await this.repository.create(userInput);
	}
	async get() {
		return await this.repository.get();
	}
	async getById(id: number) {
		return await this.repository.getById(id);
	}
	async update(userInput: UserInput, id: number) {
		return await this.repository.update(userInput, id);
	}
	async delete(id: number) {
		return await this.repository.delete(id);
	}
}
export { UserService };
