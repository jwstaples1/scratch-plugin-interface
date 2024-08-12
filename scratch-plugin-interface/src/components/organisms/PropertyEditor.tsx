import { useContext } from 'react';
import {
    EditableProperty,
    propertyTypeToString,
} from '../../model/Editable';
import {
    BuilderContext,
    BuilderContextReducerActionType,
} from '../../state/context/BuilderContext';

const PropertyEditor = () => {
    const { editable, dispatch } = useContext(BuilderContext);

    const renderProperty = (property: EditableProperty) => {
        return (
            <li key={`${property.name}`}>
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
            {!!editable && (
                <div>
                    Selected Editable:
                    <h3>{editable.name}</h3>
                    <ul>
                        {editable.properties.map((property) =>
                            renderProperty(property)
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PropertyEditor;
