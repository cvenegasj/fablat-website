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
    mainQuote?: string | null;
    city?: string | null;
    country?: string;
    weekGoal?: string | null;
    avatarUrl: string;
    labId?: string | null;
    labName?: string | null;
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
    description?: string;
    score?: number;
    members?: UserDtoOld[] | null;
    membersCount?: number;
    imgUrl: string | null;
}