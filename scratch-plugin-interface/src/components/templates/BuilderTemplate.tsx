const BuilderTemplate = () => {
    return <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", border: "1px solid red"}}>
        <div style={{display: "flex", width: "100%", height: "15%"}}>
            <div style={{width: "25%", height: "100%", border: '1px solid green'}}>Details</div>
            <div style={{flexGrow: 1, height: "100%", border: "1px solid purple"}}>Header</div>
        </div>
        <div style={{display: "flex", width: "100%", flexGrow: 1}}>
            <div style={{width: "25%", height: "!00%", border: "1px solid green"}}>Selector</div>
            <div style={{flexGrow: 1, height: "100%", border: "1px solid purple"}}>Grid</div>
        </div>
    </div>
}

export default BuilderTemplate;