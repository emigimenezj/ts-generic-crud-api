import { User } from "../models/user.model";



export interface CreateUserDto extends Omit<User, 'id' | 'creationAt' | 'updatedAt'> {}

export interface UpdateUserDto extends Partial<CreateUserDto> {}