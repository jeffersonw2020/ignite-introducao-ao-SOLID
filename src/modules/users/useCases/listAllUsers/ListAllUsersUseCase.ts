/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id);
    const userAlreadyExists = this.usersRepository.list();    
    
    if (!userIsAdmin.admin) {
      throw new Error("User is not administrator");
    }
    if(!userAlreadyExists){
      throw new Error("User does not exist");
    }
    return userAlreadyExists;
    
  }
}

export { ListAllUsersUseCase };
