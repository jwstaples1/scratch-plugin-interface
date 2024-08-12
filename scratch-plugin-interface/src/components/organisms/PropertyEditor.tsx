import { useContext } from 'react';
import {
    Editable,
    EditableProperty,
    EditablePropertyType,
    propertyTypeToString,
} from '../../model/Editable';
import { BuilderContext, BuilderContextReducerActionType } from '../../state/context/BuilderContext';

const PropertyEditor = () => {
    const {editable, dispatch} = useContext(BuilderContext);

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

    const renderProperty = (property: EditableProperty) => {
        return (
            <li>
                {`${property.name} (${propertyTypeToString(property.type)}): `}
                <span
                    style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                    {property.value}
                </span>
            </li>
        );
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'lightgray',
                borderRight: '1px solid black',
            }}
        >
            {!!editable ? (
                <div>
                    Selected Editable:
                    <h3>{editable.name}</h3>
                    <ul>
                        {editable.properties.map((property) =>
                            renderProperty(property)
                        )}
                    </ul>
                </div>
            ) : <button onClick={() => dispatch({type: BuilderContextReducerActionType.SELECT, data: mockEditable})}>Mock Editable</button>}
        </div>
    );
};

export default PropertyEditor;
