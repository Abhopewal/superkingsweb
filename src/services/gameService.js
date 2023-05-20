/** @format */
import { GetApi, PostApi } from '.';

class GameService {
  getGame(page) {
    return GetApi(`admin/getGames?page=${page}`);
  }

  createGame(values) {
    return PostApi(`admin/createGame`,values);
  }
}

const gameService = new GameService();

export default gameService;
