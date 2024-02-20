
export interface PersonData {
    _id:            number;
    _displayName:   string;
    _username:      string;
    _lastActivity?: Date;
}



export class Person {
    private _data: PersonData;

    constructor(data: PersonData) {
        this._data = data;
    }

}