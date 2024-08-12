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
}

// defines the possible property types
export enum EditablePropertyType {
    DISCRETE = 1,
    CONTINUOUS = 2,
    STRING = 3,
}
