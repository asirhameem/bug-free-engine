import AppDataSource from "../configs/orm.config";
import UserEntity from "../entities/user.entity";
import {User} from "../interfaces/user.interface";
import {v4 as uuid} from "uuid";


const userRepo = AppDataSource.getRepository(UserEntity);
export const createUser = async (user: User) => {
  let entity : UserEntity = new UserEntity();
  entity.user_id = uuid();
  entity.name = user.name;
  entity.email = user.email;
  entity.password = user.password;
  entity.role = user.role;

  return await userRepo.save(entity);
}