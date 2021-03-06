import { UserRepository } from "../repositories/UserRepository";
import { getCustomRepository  } from "typeorm";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepository);

        if (!email) {
            throw new Error("Incorrect email provided");
        }

        const userAlreadyExists = await userRepository.findOne({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const user = userRepository.create({ name, email, admin });

        await userRepository.save(user);

        return user;
    }
}
export { CreateUserService };

