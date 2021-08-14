
export interface Info {
    openRound: string;
    submissionChannel?: any;
    members: number;
    _id: string;
    customPlacements: any[];
    customPoints: any[];
    serverID: string;
    tournamentID: string;
    open: boolean;
    rounds: string;
    type: string;
    roleID: string;
    pictureVerification: boolean;
    registrationChannel: string;
    customPointSystem: boolean;
    leaderboardView: string;
    __v: number;
}

export interface Player {
    _id: string;
    playerID: string;
    Username: string;
    score1?: number;
    scorePlacement1?: string;
    score2: number;
    scorePlacement2?: string;
    score3: number;
    scorePlacement3?: string;
    score4: number;
    scorePlacement4?: string;
    score5?: number;
    scorePlacement5?: string;
    score6?: number;
    scorePlacement6?: string;
    score7?: number;
    scorePlacement7?: string;
    score8?: number;
    scorePlacement8?: string;
    score9?: number;
    scorePlacement9?: string;
    score10?: number;
    scorePlacement10?: string;
}

export interface ScoreObject {
    success: boolean;
    type: string;
    info: Info;
    players: Player[];
}



