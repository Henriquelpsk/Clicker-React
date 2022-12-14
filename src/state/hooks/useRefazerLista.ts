import { useRecoilState } from "recoil";
import Ilocalizacao from "../../interfaces/ILocalizacao";
import { listaLocalizacao, ultimaLocalizacao } from "../atom";

const useRefazerEvento = () => {

  const [listaLocaliza ,setListaLocalizacao] = useRecoilState<Ilocalizacao[]>(listaLocalizacao);
	const [listaUltimo] = useRecoilState<Ilocalizacao>(ultimaLocalizacao);

	return () => (
		setListaLocalizacao([...listaLocaliza, listaUltimo])
	)
}

export default useRefazerEvento