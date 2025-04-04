import { iRole } from "./role.interface";

export interface iLoginResponse {
    id:        number;
    name:      string;
    surname:   string;
    email:     string;
    role:      iRole;
    created_at: Date;
    token:     string;
}


