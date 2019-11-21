import { User } from './user.model';

export class Ticket{
    constructor(
        public id : string,
        public number : number,
        public titulo : string,
        public status : string,
        public priority : string,
        public imagem : string,
        public user : User,
        public assignedUser : User,
        public data : string,
        public changes : Array<string>
    ){}
}