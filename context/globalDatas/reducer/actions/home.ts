import { ReducerAction } from "../../actionTypes";

export const setHomeDataAction = (data: any): ReducerAction => ({
    type: 'SET_HOME_DATA', payload: data
});

export const setHomeErrorAction = (error: any): ReducerAction => ({
    type: 'SET_HOME_ERROR',
    payload: { error: error && error.message || 'error'}
});

export const setHomeIsLoadingAction = (isLoading: boolean): ReducerAction => ({
    type: 'SET_HOME_LOADING',
    payload: isLoading
});