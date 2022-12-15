import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../../types/userType';
import { PrismaClient } from '@prisma/client';
import { UserService } from '../../services/user/userService';
import { UserModel } from '../../models/user/userModel';
import UserInput from '../../inputs/userInput';

const prisma = new PrismaClient();
const model = new UserModel();
const service = new UserService(model);

@Resolver(User)
class UserResolver {
	@Mutation(() => User)
	async create(@Arg('userInput') userInput: UserInput) {
		return await service.create(userInput);
	}
	@Query(() => [User])
	async get() {
		return await service.get();
	}
	@Query(() => User)
	async getById(@Arg('id') id: number) {
		return await service.getById(id);
	}
	@Mutation(() => User)
	async update(@Arg('id') id: number, @Arg('userInput') userInput: UserInput) {
		return await service.update(userInput, id);
	}
	@Mutation(() => User)
	async delete(@Arg('id') id: number) {
		return await service.delete(id);
	}
}

export { UserResolver, prisma };
