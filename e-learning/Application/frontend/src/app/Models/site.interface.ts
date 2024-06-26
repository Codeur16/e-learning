import { Agence } from "./agence.interface"
import { Ville } from "./ville.interface"

export class Site {
    id!: number
    agence!: Agence
    ville!: Ville
    quartier!: string
    prixAnnulation!: number
}
