import useDeletarEvento from '../../state/hooks/useDeletarLista'
import useDesfazerEvento from '../../state/hooks/useDesfazerLista'
import useRefazerEvento from '../../state/hooks/useRefazerLista';
import './styles.css'

export default function Navegacao(){

	const deletarLista = useDeletarEvento()
	const desfazerLista = useDesfazerEvento();
	const refazerLista = useRefazerEvento();

	const limpar = () => {
			deletarLista();
	}

	const desfazer = () => {
			desfazerLista();
	}

	const refazer = () => {
			refazerLista();
	}

	return(
		<nav className='nav'>
			<div className='titulo'>
				<h1>Point Clicker</h1>
				<p>clique na área branca para testar!</p>
			</div>
			<ul className='ul'>
				<li className='li' onClick={limpar}><button className='botao'>Limpar</button></li>
				<li className='li' onClick={desfazer}><button className='botao'>Desfazer</button></li>
				<li className='li' onClick={refazer}><button className='botao'>Refazer</button></li>
			</ul>
		</nav>
	)
}