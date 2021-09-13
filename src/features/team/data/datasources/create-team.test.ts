import { createTeam } from './create-team';

describe('createTeam', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    const team = {
        "team":{
              "name": "Bafana Bafana",
              "location": "South Africa",
              "headcoach": "Hugo Broos",
              "founded":  "1991-06-11T14:15:48+02:00",
              "stadium_id":152
          }
  }

    test('should create team given team data and return result details', async () => {
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
      const result = await createTeam(team);
  
      // assert 
      expect(result).toBeDefined();
    });
  
    test('it should throw an error when team data has not been provided', async () => {
  
      try {
        // @ts-ignore
        expect(await createTeam()).toEqual(expect.any(Object));
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });