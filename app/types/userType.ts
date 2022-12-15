import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class User {
	@Field((type) => ID)
	id: number;
	@Field()
	name: string;
	@Field()
	email: string;
}

export { User };
