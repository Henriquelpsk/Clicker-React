import { useSetRecoilState } from "recoil";
import Ilocalizacao from "../../interfaces/ILocalizacao";
import {listaLocalizacao, ultimaLocalizacao } from "../atom";

const useDeletarEvento = () => {
  const setListaLocalizacao = useSetRecoilState<Ilocalizacao[]>(listaLocalizacao);
  const setListaUltimo = useSetRecoilState<Ilocalizacao>(ultimaLocalizacao);
  return () => (
    setListaLocalizacao([]),
    setListaUltimo({'x': 0, 'y': 0})
  )
}

export default useDeletarEvento