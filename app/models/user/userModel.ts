import UserInput from '../../inputs/userInput';
import { prisma } from '../../resolvers/user/userResolver';

class UserModel {
	async create(userInput: UserInput) {
		return await prisma.user.create({
			data: {
				name: userInput.name,
				email: userInput.email,
			},
		});
	}
	async get() {
		return await prisma.user.findMany({});
	}
	async getById(id: number) {
		return await prisma.user.findUnique({ where: { id } });
	}
	async update(userInput: UserInput, id: number) {
		return await prisma.user.update({
			where: { id },
			data: {
				name: userInput.name,
				email: userInput.email,
			},
		});
	}
	async delete(id: number) {
		return await prisma.user.delete({ where: { id } });
	}
}

export { UserModel };
