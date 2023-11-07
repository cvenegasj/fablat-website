export interface UserDtoOld {
    idFabber: number;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    isFabAcademyGrad: boolean | null;
    fabAcademyGradYear: string | null;
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
    workshopsCount: number | null;
    eventsCount: number | null;
}

export interface GroupDtoOld {
    id: number;
    name: string;
    description?: string;
    score: number | null;
    members: UserDtoOld[] | null;
    membersCount: number;
    imgUrl: string | null;
    workshopsCount: number | null;
    eventsCount: number | null;
}

export interface WorkshopDtoOld {
    idWorkshop: number;
    type: string;
    replicationNumber?: number | null;
    name: string;
    description: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    startDateDay: number;
    startDateMonth: string;
    startDateFormatted: string;
    endDateFormatted: string;
    startDateTimeISO: string;
    endDateTimeISO: string;
    startDateTimeCalendar: string;
    endDateTimeCalendar: string;
    isPaid: boolean;
    price: number | null;
    currency: string | null;
    facebookUrl: string | null;
    ticketsUrl: string | null;
    creationDateTime: string;
    enabled: boolean | null;
    locationId: number | null;
    locationAddress: string | null;
    locationCity: string | null;
    locationCountry: string | null;
    locationLatitude: string | null;
    locationLongitude: string | null;
    labName: string | null;
    subGroupId: number;
    subGroupName: string;
    groupId: number;
    groupName: string;
    tutors: WorkshopTutorDtoOld[];
    amITutor: boolean | null;
}

export interface WorkshopTutorDtoOld {
    idWorkshopTutor: number;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    fabberId: number;
    fabberAvatarUrl: string;
}