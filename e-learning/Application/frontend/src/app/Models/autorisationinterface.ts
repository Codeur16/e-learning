import { Fonctionnalite } from "./Fonctionnalite.interface"
import { Profil } from "./Profil.interface"

export class Autorisation {
    id!: number
    profil!: Profil
    fonctionnalite!: Fonctionnalite
}
