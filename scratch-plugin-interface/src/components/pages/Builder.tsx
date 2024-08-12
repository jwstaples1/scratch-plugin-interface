import PropertyEditor from '../organisms/PropertyEditor';
import BuilderGrid from '../organisms/BuilderGrid';
import BuilderTemplate, {
    BuilderTemplateProps,
} from '../templates/BuilderTemplate';
import { Editable, EditablePropertyType } from '../../model/Editable';

const Builder = () => {
    const mockEditable: Editable = {
        name: 'TestEditable',
        properties: [
            {
                name: 'Discrete Property',
                type: EditablePropertyType.DISCRETE,
                value: 1,
            },
            {
                name: 'Continuous Property',
                type: EditablePropertyType.CONTINUOUS,
                value: 0.5,
            },
            {
                name: 'String Property',
                type: EditablePropertyType.STRING,
                value: 'test value!',
            },
        ],
    };

    const components: BuilderTemplateProps['components'] = {
        selector: <PropertyEditor editable={mockEditable} />,
        grid: <BuilderGrid />,
    };

    return <BuilderTemplate components={components} />;
};

export default Builder;
