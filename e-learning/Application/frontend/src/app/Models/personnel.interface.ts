import { Profil } from "./Profil.interface"
import { Site } from "./site.interface"

export class Personnel {
    id!: number
    site!: Site
    profil!: Profil
    nom!: string
    telephone!: string
    quartier!: string
    email!: string
    login!: string
    password!: string
}
