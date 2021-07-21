import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/repositories"
import {classToPlain} from "class-transformer"

class ListAllUsersService {
    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories)

        const users = await usersRepositories.find()

        return classToPlain(users);
    }
}

export {ListAllUsersService}