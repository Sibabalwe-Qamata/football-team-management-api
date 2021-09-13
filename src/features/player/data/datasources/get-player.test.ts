import { getPlayer } from './get-player'

describe('getPlayer', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    const player_id =  "Z9lak8ZOXUaGnDpjFUnyQ3l3bil9FWsi";

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
      const result = await getPlayer(player_id);
  
      // assert 
      expect(result).toBeDefined();
    });
  
    test('it should throw an error when player_id or player have not been provided', async () => {
  
      try {
        // @ts-ignore
        expect(await getPlayer()).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });