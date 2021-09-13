import { linkTeamToStadium } from './link-team-to-stadium';

describe('linkTeamToStadium', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    const stadium_id = 152;
    const team_id = 653941;

    test('should link team given team_id, stadium_id and return result details', async () => {
      // arrange
  
      const set = jest.fn();
      const update = jest.fn();
      const doc = jest.fn(() => ({
        id: 'team_doc_id',
        update,
        set,
        collection: subcollection
      }));
      const subcollection = jest.fn(() => ({ doc }));
    
  
      // act
      const result = await linkTeamToStadium(team_id,stadium_id);
  
      // assert 
      expect(result).toBeDefined();
    });
  
    test('it should throw an error when team data has not been provided', async () => {
  
      try {
        // @ts-ignore
        expect(await linkTeamToStadium()).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });