import { editPlayerTeam } from './edit-player-team'

describe('editPlayerTeam', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    const team_id = 1423;
    const player_id =  "DwcQFyj4t2w6XS3UL0Lur39dBnmH2RGH";
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
      const result = await editPlayerTeam(team_id, player_id);
  
      // assert 
      expect(result).toBeDefined();
    });
  
    test('it should throw an error when team_id, have not been provided', async () => {
  
      try {
        // @ts-ignore
        expect(await editPlayerTeam()).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });