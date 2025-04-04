import { iRole } from "./role.interface";

export interface iCheckTokenResponse {
    id:         number;
    role_id:    number;
    name:       string;
    surname:    string;
    email:      string;
    password:   string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date | null;
    role:       iRole;
}
