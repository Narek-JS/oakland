import { ReducerAction } from "../../actionTypes";

export const setMenuDataAction = (data: any): ReducerAction => ({
    type: 'SET_MENU_DATA', payload: data
});

export const setMenuErrorAction = (error: any): ReducerAction => ({
    type: 'SET_MENU_ERROR',
    payload: { error: error && error.message || 'error'}
});

export const setMenuIsLoadingAction = (isLoading: boolean): ReducerAction => ({
    type: 'SET_MENU_LOADING',
    payload: isLoading
});