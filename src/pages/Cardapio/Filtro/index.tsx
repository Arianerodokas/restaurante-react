import styles from './Filtro.module.scss';
import {CgSearch} from 'react-icons/cg'

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Filtro({busca, setBusca}: Props) {
    return (
        <div className={styles.buscador}>
            <input
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
            />
            <CgSearch/>
        </div>
    );


}