import BlockSelector from "../organisms/BlockSelector";
import BuilderGrid from "../organisms/BuilderGrid";
import Header from "../organisms/Header";
import ProjectDetails from "../organisms/ProjectDetails";
import BuilderTemplate, { BuilderTemplateProps } from "../templates/BuilderTemplate";

const Builder = () => {
    const components: BuilderTemplateProps["components"] = {
        header: <Header/>,
        selector: <BlockSelector/>,
        grid: <BuilderGrid/>,
        details: <ProjectDetails/>
    }

    return <BuilderTemplate components={components}/>
}

export default Builder;