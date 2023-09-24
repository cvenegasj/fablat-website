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