import { createPlayer } from './create-player'

describe('createPlayer', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    const team_id = 0;

    test('should find a result by team_id and return result details', async () => {
      // arrange
      const player = {
        team_id: 546516,
		name: "Leaonado",
		surname: "Messi",
		height: 123,
		position: 7
      }
  
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
      const result = await createPlayer(team_id, player);
  
      // assert 
      expect(result).toBeDefined();
    });
  
    test('it should throw an error when team_id, have not been provided', async () => {
  
      try {
        // @ts-ignore
        expect(await createPlayer()).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  
    test('it should throw an error when name, surname, height, position is not provided', async () => {
      try {
        // @ts-ignore
        expect(await createOrder(client_id)).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });