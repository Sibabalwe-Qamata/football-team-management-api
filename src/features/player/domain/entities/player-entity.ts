export class Player {
    player_id : string;
    team_id:string;
    name:string;
    surname:string;
    height:string;
    position:string;

    constructor(args: any){
        this.player_id = args.player_id;
        this.team_id = args.team_id;
        this.name = args.name;
        this.surname = args.surname;
        this.height = args.height;
        this.position = args.position;
    }

}