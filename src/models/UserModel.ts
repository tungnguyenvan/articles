export interface UserModel {
    id: number;
    email: string;
    username: string;
    password?: string;
    fullname: string;
    created_at: Date;
    updated_at: Date;
}