import AppDataSource from "../configs/orm.config";
import UserEntity from "../entities/user.entity";
import {User} from "../interfaces/user.interface";
import {randomUUID} from "crypto";
import bcrypt from "bcrypt";
import configs from "../configs";


const userRepo = AppDataSource.getRepository(UserEntity);

const getUserByEmail = async (userEmail: string) => {
  return userRepo.findOneBy({email: userEmail});
}

const userLogin = async (userEmail: string, userPass: string) => {
  const hashedPass = await bcrypt.hash(userPass, parseInt(configs.salt));
  return userRepo.findOneBy({email: userEmail, password: hashedPass});
}
const createUser = async (user: User) => {
  try {
    let entity : UserEntity = new UserEntity();
    entity.user_id = randomUUID();
    entity.name = user.name;
    entity.email = user.email;
    entity.password = await bcrypt.hash(user.password, parseInt(configs.salt));
    entity.role = user.role;

    return await userRepo.save(entity);
  } catch (error) {
    return error;
  }
}

export const UserServices = {
  createUser,
  getUserByEmail,
  userLogin,
}