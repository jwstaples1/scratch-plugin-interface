import { useContext } from 'react';
import GridLines from '../atoms/GridLines';
import { BuilderContext, BuilderContextReducerActionType } from '../../state/context/BuilderContext';

const BuilderGrid = () => {
    const {dispatch} = useContext(BuilderContext);
    return <div style={{width: '100%', height: '100%'}} onClick={() => dispatch({type: BuilderContextReducerActionType.DESELECT})}><GridLines /></div>;
};

export default BuilderGrid;
