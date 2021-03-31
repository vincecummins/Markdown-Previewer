import Minmax from './Minmaxed'

const Editor = ( {expand, input, change, fs, fullscreen} ) => {
    
    return (
        <div className={`editor border ${fs? 'fs' : ''}`}>
            <header className="header">
                <div>Editor</div>
                <div>
                    <Minmax fullscreen={fullscreen} fs={fs}/>
                </div>
            </header>
            <textarea type="text" value={input} onChange={change} />
        </div>
    )
}

export default Editor
