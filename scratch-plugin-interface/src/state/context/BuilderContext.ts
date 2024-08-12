import { createContext, Dispatch, Reducer } from 'react';
import { Editable } from '../../model/Editable';

// type of the actual builder context passed between objects, along with a self-referencing dispatch to update itself
export type BuilderContextType = {
    editable?: Editable;
    dispatch: Dispatch<BuilderContextAction>;
};

// types of actions that can be passed to the dispatch function
export enum BuilderContextReducerActionType {
    SELECT = 1,
    DESELECT = 2,
}

// internal type for the data structure of an action
type BuilderContextAction = {
    type: BuilderContextReducerActionType;
    data?: any;
};

// reducer to manage the state values within the builder
export const BuilderContextReducer: Reducer<
    BuilderContextType,
    BuilderContextAction
> = (state: BuilderContextType, action: BuilderContextAction) => {
    const newState = { ...state };

    switch (action.type) {
        case BuilderContextReducerActionType.SELECT:
            const newEditable = action.data as Editable;
            newState.editable = newEditable;
            break;
        case BuilderContextReducerActionType.DESELECT:
            newState.editable = undefined;
            break;
        default:
            console.error('Attempted action not defined in reducer');
            break;
    }

    return newState;
};

// React definition of the context
export const BuilderContext = createContext<BuilderContextType>(
    {} as BuilderContextType
);
