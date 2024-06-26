import { Site } from "./site.interface"
import { Ville } from "./ville.interface"

export class Itineraire {
    id!: number
    site!: Site
    villeDepart!: Ville
    villeDestination!: Ville
    duree!: number
    prixClassique!: number
    prixVip!: number
    created_at!: Date
    arrets!: string
}
