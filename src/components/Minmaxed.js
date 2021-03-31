import { FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa'

const Minmax = ({fullscreen, fs}) => {
    return (
        <div>
            {!fs ? <div onClick={fullscreen} className='minmax'>{<FaExpandArrowsAlt />}</div> :
                    <div onClick={fullscreen} className='minmax'>{<FaCompressArrowsAlt />}</div>}
        </div>
    )
}

export default Minmax
