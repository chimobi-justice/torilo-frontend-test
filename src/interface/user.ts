export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  company: {
    department?: string;
  };
}

export interface UserDetail {
  id: number;
  firstName: string;
  email: string;
  age?: number;
  gender?: string;
  phone?: string;
  birthDate?: string;
  image?: string;
  eyeColor?: string;
  company: {
    department?: string;
    name: string;
    title: string;
  };
}

export interface UserResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
