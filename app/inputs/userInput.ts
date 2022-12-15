import { Field, ID, InputType } from 'type-graphql';

@InputType()
class UserInput {
	@Field()
	name: string;
	@Field()
	email: string;
}

export default UserInput;
