import "../../theme/templates.scss"

export const DefaultTemplateComponent = ({name}: {name: string}) => {
    return <div className="templateComponent">{name}</div>
}