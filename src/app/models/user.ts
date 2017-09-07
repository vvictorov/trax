export class User {
    id: number;
    name: string;
    email: string;
    public constructor (id: number, name: string, email?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
