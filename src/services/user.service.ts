import AppDataSource from "../configs/orm.config";
import UserEntity from "../entities/user.entity";
import {User} from "../interfaces/user.interface";
import {randomUUID} from "crypto";
import bcrypt from "bcrypt";


const userRepo = AppDataSource.getRepository(UserEntity);

const isEmailExist = async (userEmail: string) => {
  const userInfo = await userRepo.findOneBy({email: userEmail});
  return !!userInfo;
}

const userLogin = async (userEmail: string, userPass: string) => {
  const userInfo : any = await userRepo.findOneBy({email: userEmail});
  const matchPassword = await bcrypt.compare(userPass, userInfo.password);
  if (!matchPassword) {
    return false;
  }
  return userInfo;
}
const createUser = async (user: User) => {
  try {
    let entity : UserEntity = new UserEntity();
    entity.user_id = randomUUID();
    entity.name = user.name;
    entity.email = user.email;
    entity.password = await bcrypt.hash(user.password, 10);
    entity.role = user.role;

    return await userRepo.save(entity);
  } catch (error) {
    return error;
  }
}

export const UserServices = {
  createUser,
  isEmailExist,
  userLogin,
}