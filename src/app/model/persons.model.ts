export class IPersonsState {
    persons: IPersonsData[];
}

export class IPersonsData {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
    StateID: number
}