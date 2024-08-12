import { useContext } from 'react';
import {
    BuilderContext,
    BuilderContextReducerActionType,
} from '../../state/context/BuilderContext';
import { Editable, EditablePropertyType } from '../../model/Editable';

const DraggableBlock = () => {
    const { editable, dispatch } = useContext(BuilderContext);

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

    return (
        <div
            style={{
                position: 'absolute',
                width: '10rem',
                height: '10rem',
                backgroundColor: 'coral',
                border:
                    editable?.name === mockEditable.name
                        ? '3px solid blue'
                        : '1px solid black',
                padding: '1rem',
                borderRadius: '1rem',
                zIndex: 50,
            }}
            onClick={() =>
                dispatch({
                    type: BuilderContextReducerActionType.SELECT,
                    data: mockEditable,
                })
            }
        >
            <p style={{ fontWeight: 'bold' }}>{mockEditable.name}</p>
        </div>
    );
};

export default DraggableBlock;
