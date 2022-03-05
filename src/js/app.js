import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

export default new Promise((resolve) => {
  GameSavingLoader.load()
    .then((saving) => resolve(new GameSaving(saving)))
    .catch((error) => {
      throw new Error(error.message);
    });
});
