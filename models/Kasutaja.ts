export class Kasutaja {
constructor(
        private _id: number,
        private _name: string,
        public password: string,
        public FirstName: string,
        public LastName: string,

    ) {}

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;

    }
}