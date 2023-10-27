export interface UserDtoOld {
    idFabber: number;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    isFabAcademyGrad: boolean;
    fabAcademyGradYear?: any;
    cellPhoneNumber?: any;
    isNomade: boolean;
    mainQuote?: string;
    city?: string;
    country?: string;
    weekGoal?: string;
    avatarUrl: string;
    labId?: string;
    labName?: string;
    generalScore: number;
    coordinatorScore: number;
    collaboratorScore: number;
    replicatorScore: number;
    authorities: string[];
    groupsJoined: GroupDtoOld[];
}

export interface GroupDtoOld {
    id: number;
    name: string;
    description: string;
    score: number;
    members: UserDtoOld[];
    membersCount: number;
    imgUrl: string;
}