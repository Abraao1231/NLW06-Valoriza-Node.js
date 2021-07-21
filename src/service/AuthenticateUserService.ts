import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/repositories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }


        const token = sign({
            email: user.email
        }, "8511606d285051a76ea7b2d834b44804", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;

    }
}

export { AuthenticateUserService };