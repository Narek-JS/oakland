
import React, { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { IHomeData } from "@/models/adapter/homeAdapter";
import { ReducerAction } from "./actionTypes";

interface SliceType<T = any> {
    error: string | null | boolean;
    isLoading: boolean;
    data: T | null;
};

interface ILatestArticles {
    blogs: Array<Record<string, any>>;
    news: Array<Record<string, any>>;
};

interface IHomeSliceData extends IHomeData {
    latestArticles?: ILatestArticles;
};

type SliceDataType<T> = SliceType<T>;

class SliceInitialState implements SliceType {
    error: null;
    isLoading: boolean;
    data: null;

    constructor () {
        this.error = null;
        this.isLoading = false;
        this.data = null;
    };
};

export interface GlobalDatasProps {
    menus: SliceType;
    home: SliceDataType<IHomeSliceData>;
    menuBar: {
        isOpen: boolean,
        toogleIsOpen: () => void;
    };
    formPopUp: {
        isOpen: boolean,
        toogleIsOpen: () => void;
    };
    dispatch: (action: ReducerAction) => void;
}

type ReducerDispatch = (action: ReducerAction) => void;

type UseReducerReturn = [GlobalDatasProps, ReducerDispatch];

interface IContext {
    children: React.ReactNode;
};

const initialValue: GlobalDatasProps = {
    home: new SliceInitialState(),
    menus: new SliceInitialState(),
    menuBar: {
        isOpen: false,
        toogleIsOpen: () => {}
    },
    formPopUp: {
        isOpen: false,
        toogleIsOpen: () => {}
    },
    dispatch: () => {}
};

const GlobalDatasContext = createContext<GlobalDatasProps>(initialValue);

const GlobalDatasProvider: React.FC<IContext> = ({ children }) => {
    const [globalState, dispatch]: UseReducerReturn = useReducer(reducer, initialValue);

    globalState.menuBar.toogleIsOpen = () => dispatch({ type: 'TOOGLE_IS_OPEN_MENU' });
    globalState.formPopUp.toogleIsOpen = () => dispatch({ type: 'TOOGLE_IS_OPEN_FORM_POP_UP' });

    return (
        <GlobalDatasContext.Provider value={{ ...globalState, dispatch }}>
            {children}
        </GlobalDatasContext.Provider>
    );
};

export { GlobalDatasContext, GlobalDatasProvider };
