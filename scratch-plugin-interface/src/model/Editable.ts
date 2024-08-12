// An editable is anything that can has attributes and can be edited such as a custom item
export interface Editable {
    name: string;
    properties: EditableProperty[];
}

// properties each have a name, a type of data stored, and a value if it exists
export type EditableProperty = {
    name: string;
    type: EditablePropertyType;
    value?: number | string;
};

// defines the possible property types
export enum EditablePropertyType {
    DISCRETE = 1,
    CONTINUOUS = 2,
    STRING = 3,
}

// helper method to convert between property types and a readable string value
export const propertyTypeToString = (type: EditablePropertyType) => {
    switch (type) {
        case EditablePropertyType.DISCRETE:
            return 'Discrete';
        case EditablePropertyType.CONTINUOUS:
            return 'Continuous';
        case EditablePropertyType.STRING:
            return 'String';
        default:
            return 'Unspecified';
    }
};
