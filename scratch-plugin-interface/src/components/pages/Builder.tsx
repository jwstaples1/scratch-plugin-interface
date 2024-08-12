import PropertyEditor from '../organisms/PropertyEditor';
import BuilderGrid from '../organisms/BuilderGrid';
import BuilderTemplate, {
    BuilderTemplateProps,
} from '../templates/BuilderTemplate';
import { useReducer } from 'react';
import {
    BuilderContext,
    BuilderContextReducer,
} from '../../state/context/BuilderContext';
import DraggableBlock from '../organisms/DraggableBlock';

const Builder = () => {
    const [state, dispatch] = useReducer(BuilderContextReducer, {
        dispatch: (action) => dispatch(action),
    });

    const components: BuilderTemplateProps['components'] = {
        selector: <PropertyEditor />,
        grid: <BuilderGrid />,
    };

    return (
        <BuilderContext.Provider value={state}>
            <DraggableBlock />
            <BuilderTemplate components={components} />
        </BuilderContext.Provider>
    );
};

export default Builder;
