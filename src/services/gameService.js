/** @format */
import { GetApi, PostApi } from '.';

class GameService {
  getGame(page) {
    return GetApi(`admin/game?page=${page}`);
  }

  createGame(values) {
    return PostApi(`admin/game`,values);
  }
}

const gameService = new GameService();

export default gameService;
