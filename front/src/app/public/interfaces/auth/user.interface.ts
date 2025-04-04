import { iRole } from "./role.interface";

export interface iUser {
    id:         number;
    role_id:    number;
    name:       string;
    surname:    string;
    email:      string;
    password?:   string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: null;
    role:       iRole;
}
