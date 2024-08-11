import BlockSelector from '../organisms/BlockSelector';
import BuilderGrid from '../organisms/BuilderGrid';
import BuilderTemplate, {
    BuilderTemplateProps,
} from '../templates/BuilderTemplate';

const Builder = () => {
    const components: BuilderTemplateProps['components'] = {
        selector: <BlockSelector />,
        grid: <BuilderGrid />,
    };

    return <BuilderTemplate components={components} />;
};

export default Builder;
