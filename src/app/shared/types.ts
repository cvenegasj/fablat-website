export interface UserDto {
    id: string,
    email: string,
    displayName: string, 
    avatarUrl: string, 
    score: number, 
    groupsJoined: any[], 
    workshopsCount: number, 
    eventsCount: number,
    country: string,
}

export interface GroupDto {
    id: string,
    name: string,
    imgUrl: string,
    score: number,
    membersCount: number,
    workshopsCount: number, 
    eventsCount: number,
}
