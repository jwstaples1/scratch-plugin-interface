import PropertyEditor from '../organisms/PropertyEditor';
import BuilderGrid from '../organisms/BuilderGrid';
import BuilderTemplate, {
    BuilderTemplateProps,
} from '../templates/BuilderTemplate';

const Builder = () => {
    const components: BuilderTemplateProps['components'] = {
        selector: <PropertyEditor />,
        grid: <BuilderGrid />,
    };

    return <BuilderTemplate components={components} />;
};

export default Builder;
