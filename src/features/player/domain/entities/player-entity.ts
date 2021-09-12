export class Player {
    player_id : string;
    team_id:number;
    name:string;
    surname:string;
    height:number;
    position:number;

    constructor(id:string,_team_id:number, args: any){
        this.player_id = id;
        this.team_id = _team_id;
        this.name = args.name;
        this.surname = args.surname;
        this.height = args.height;
        this.position = args.position;
    }

}