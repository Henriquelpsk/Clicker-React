import Ilocalizacao from '../../interfaces/ILocalizacao'
import './styles.css'

export default function Bola({x, y}:Ilocalizacao) {
	return(
		<>
		<div className='bola' style={{left:x-10, top: y-10, position:'absolute'}}></div>
		</>
	)
}