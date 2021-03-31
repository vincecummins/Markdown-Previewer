import Minmax from './Minmaxed'
const Previewer = ( {expand, state, marked, fullscreenpre, fspre} ) => {
    return (
        <div>
            <div className={`previewer border ${fspre? 'fspre' : ''}`}>
            <header className="header">
                <div>Previewer</div>
                <div>
                    <Minmax fullscreen={fullscreenpre} fs={fspre}/>
                </div>
            </header>
            <div id = "preview" dangerouslySetInnerHTML={{__html:marked(state)}}></div>
        </div>
        </div>
    )
}

export default Previewer
