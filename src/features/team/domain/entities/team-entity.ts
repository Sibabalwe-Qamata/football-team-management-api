export class Team {
    team_id:number;
    stadium_id: number;
    name:string;
    location:string;
    headcoach:number;
    founded:Date;

    constructor(id:number,stadium_id:number, args: any){
        this.team_id = id;
        this.stadium_id = stadium_id;
        this.name = args.name;
        this.location = args.location;
        this.headcoach = args.headcoach;
        this.founded = args.founded;
    }

}