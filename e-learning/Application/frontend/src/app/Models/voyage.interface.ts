import { Site } from "./site.interface"
import { Itineraire } from "./itineraire.interface"
import { Bus } from "./bus.interface"

export class Voyage {
    id!: number
    itineraire!: Itineraire
    bus!: Bus
    code!: string
    dateDepart!: Date
}
