import { DefaultTemplateComponent } from "./DefaultTemplateComponent";

export type BuilderTemplateProps = {
    components: {
        details?: JSX.Element;
        header?: JSX.Element;
        selector?: JSX.Element;
        grid?: JSX.Element;
    }
}

const BuilderTemplate = ({components}: BuilderTemplateProps) => {
    return <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", border: "1px solid red"}}>
        <div style={{display: "flex", width: "100%", height: "15%"}}>
            <div style={{width: "25%", height: "100%"}}>{components.details ?? <DefaultTemplateComponent name={"Details"}/>}</div>
            <div style={{flexGrow: 1, height: "100%"}}>{components.header ?? <DefaultTemplateComponent name={"Header"}/>}</div>
        </div>
        <div style={{display: "flex", width: "100%", flexGrow: 1}}>
            <div style={{width: "25%", height: "100%"}}>{components.selector ?? <DefaultTemplateComponent name={"Selector"}/>}</div>
            <div style={{flexGrow: 1, height: "100%"}}>{components.grid ?? <DefaultTemplateComponent name={"Grid"}/>}</div>
        </div>
    </div>
}

export default BuilderTemplate;