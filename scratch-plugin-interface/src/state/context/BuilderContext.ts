import { createContext, Reducer } from "react";
import { Editable } from "../../model/Editable"

export type BuilderContextType = {
    editable?: Editable;
    dispatch: (action: BuilderContextAction) => void;
}

export enum BuilderContextReducerActionType {
    SELECT = 1,
    DESELECT = 2,
}

type BuilderContextAction = {type: BuilderContextReducerActionType, data?: any}

export const BuilderContextReducer: Reducer<BuilderContextType, BuilderContextAction> = (state: BuilderContextType, action: BuilderContextAction) => {
    
    const newState = {...state};
    
    switch(action.type) {
        case BuilderContextReducerActionType.SELECT:
            const newEditable = action.data as Editable;
            newState.editable = newEditable;
            break;
        case BuilderContextReducerActionType.DESELECT:
            newState.editable = undefined;
            break;
        default: 
            console.error("Attempted action not defined in reducer");
            break;
    }

    return newState;
}

export const BuilderContext = createContext<BuilderContextType>({} as BuilderContextType);