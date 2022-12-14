import { atom } from "recoil";
import Ilocalizacao from "../interfaces/ILocalizacao";

export const listaLocalizacao = atom<Ilocalizacao[]>({
	key:'listaLocalizacao',
	default:[]
})

export const ultimaLocalizacao = atom<Ilocalizacao>({
	key:'ultimaLocalizacao',
	default:{'x': 0, 'y': 0}
})