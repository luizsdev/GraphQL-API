import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/user/userResolver';
//Initalize server
async function bootstrap() {
	const schema = await buildSchema({
		resolvers: [UserResolver],
		validate: false,
	});

	const server = new ApolloServer({ schema });

	server.listen({ port: 4000 }).then(() => {
		console.log('Server is running!');
	});
}

bootstrap();
