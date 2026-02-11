export type Theme = "light" | "dark" | "system";
export type Language = "es" | "en";
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "user";
}
