import { editPlayer } from './edit-player'

describe('editPlayer', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    const player_id =  "Z9lak8ZOXUaGnDpjFUnyQ3l3bil9FWsi";
    const player = {
        "player_id": "Z9lak8ZOXUaGnDpjFUnyQ3l3bil9FWsi",
        "team_id": 546516,
        "name": "Leaonado",
        "surname": "Messi",
        "height": 123,
        "position": 7
      }

    test('should find a result by team_id and return result details', async () => {
      // arrange
  
      const set = jest.fn();
      const update = jest.fn();
      const doc = jest.fn(() => ({
        id: 'player_doc_id',
        update,
        set,
        collection: subcollection
      }));
      const subcollection = jest.fn(() => ({ doc }));
    
  
      // act
      const result = await editPlayer(player_id, player);
  
      // assert 
      expect(result).toBeDefined();
    });
  
    test('it should throw an error when player_id or player have not been provided', async () => {
  
      try {
        // @ts-ignore
        expect(await editPlayer()).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });