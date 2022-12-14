import { useRecoilState, useSetRecoilState } from "recoil";
import Ilocalizacao from "../../interfaces/ILocalizacao";
import { listaLocalizacao, ultimaLocalizacao } from "../atom";

const useDesfazerEvento = () => {

  const [listaLocaliza ,setListaLocalizacao] = useRecoilState<Ilocalizacao[]>(listaLocalizacao);
	const setListaUltimo = useSetRecoilState<Ilocalizacao>(ultimaLocalizacao);
	let listaNova = [...listaLocaliza.slice(0, -1)]
	const ultimoIndice = listaLocaliza.length - 1;

	return () => (
		setListaUltimo(listaLocaliza[ultimoIndice]),
		setListaLocalizacao(listaNova)
	)
}

export default useDesfazerEvento