export class User {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    public constructor (id: number, name: string, email?: string, imageUrl?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
    }
}
