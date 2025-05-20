import { AdminRead } from "./admin"
import { CustomerRead } from "./customer"

export type UserScopes = "admin" | "customer"

export type UserRead = {
    data: CustomerRead | AdminRead
    scope: UserScopes
}