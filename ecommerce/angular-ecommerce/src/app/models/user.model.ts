export class User {

    id: number;

    email: string;

    password: string;

    role: string;

    constructor(obj: any = null) {
        if(obj != null) {
            Object.assign(this, obj);
        }
    }
}