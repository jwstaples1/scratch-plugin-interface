import "../../theme/templates.scss"

export type BuilderTemplateProps = {
    components: {
        details?: JSX.Element;
        header?: JSX.Element;
        selector?: JSX.Element;
        grid?: JSX.Element;
    }
}

const defaultComponents: BuilderTemplateProps["components"] = {
    details: <div className="templateComponent">Details</div>,
    header: <div className="templateComponent">Header</div>,
    selector: <div className="templateComponent">Selector</div>,
    grid: <div className="templateComponent">Grid</div>,
}

const BuilderTemplate = ({components}: BuilderTemplateProps) => {
    return <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", border: "1px solid red"}}>
        <div style={{display: "flex", width: "100%", height: "15%"}}>
            <div style={{width: "25%", height: "100%"}}>{components.details ?? defaultComponents.details}</div>
            <div style={{flexGrow: 1, height: "100%"}}>{components.header ?? defaultComponents.header}</div>
        </div>
        <div style={{display: "flex", width: "100%", flexGrow: 1}}>
            <div style={{width: "25%", height: "100%"}}>{components.selector ?? defaultComponents.selector}</div>
            <div style={{flexGrow: 1, height: "100%"}}>{components.grid ?? defaultComponents.grid}</div>
        </div>
    </div>
}

export default BuilderTemplate;