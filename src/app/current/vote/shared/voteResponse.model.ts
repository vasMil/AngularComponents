export class VoteResponse {
    icon: string;
    num_of_votes: number;

    constructor(icon: string, numOfVotes: number) {
        this.icon = icon;
        this.num_of_votes = numOfVotes;
    }
}