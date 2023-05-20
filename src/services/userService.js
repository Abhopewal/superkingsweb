/** @format */
import { GetApi, PostApi } from '.';

class UserService {
  getUsers(page) {
    return GetApi(`admin/getUsers?page=${page}`);
  }
}

const userService = new UserService();

export default userService;
