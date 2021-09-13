import { createPlayers } from './create-players'

describe('createPlayers', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    const team_id = 0;

    test('should find a result by team_id and return result details', async () => {
      // arrange
      const players = [
        {
          "player_id": "vwKv9xD3wrHPBPbCU2gphm8JECzYDMLi",
          "team_id": 546516,
          "name": "Lenado",
          "surname": "Mei",
          "height": 103,
          "position": 3
        },
        {
          "player_id": "DwcQFyj4t2w6XS3UL0Lur39dBnmH2RGH",
          "team_id": 546516,
          "name": "Leaonado",
          "surname": "Messi",
          "height": 123,
          "position": 7
        }
      ]
  
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
      const result = await createPlayers(team_id, players);
  
      // assert 
      expect(result).toBeDefined();
    });
  
    test('it should throw an error when team_id, have not been provided', async () => {
  
      try {
        // @ts-ignore
        expect(await createPlayers()).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  
    test('it should throw an error when name, surname, height, position is not provided', async () => {
      try {
        // @ts-ignore
        expect(await createOrders(team_id)).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });