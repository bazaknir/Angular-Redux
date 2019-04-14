import { IPersonsData } from '../model/persons.model';

export class PersonsActions {
    static readonly SET_DATA = 'SET_DATA';

    setData = (p: IPersonsData) => ({
        type: PersonsActions.SET_DATA,
        person: p
    });
}



