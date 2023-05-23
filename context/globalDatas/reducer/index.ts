import { GlobalDatasProps } from "..";
import { setHomeData, setHomeError, setHomeLoading } from "./home";
import { setMenuData, setMenuError, setMenuLoading } from "./menu";
import { ReducerAction } from "../actionTypes";

const reducerDictionary = {
    // MENU
    SET_MENU_DATA: setMenuData,
    SET_MENU_ERROR: setMenuError,
    SET_MENU_LOADING: setMenuLoading,

    // HOME
    SET_HOME_DATA: setHomeData,
    SET_HOME_ERROR: setHomeError,
    SET_HOME_LOADING: setHomeLoading,

    TOOGLE_IS_OPEN_MENU: (state: GlobalDatasProps) => {
        state.menuBar.isOpen = !state.menuBar.isOpen;
        return { ...state };
    },

    TOOGLE_IS_OPEN_FORM_POP_UP: (state: GlobalDatasProps) => {
        state.formPopUp.isOpen = !state.formPopUp.isOpen;
        return { ...state };
    },
};

const reducer = (
    state: GlobalDatasProps,
    action: ReducerAction
): GlobalDatasProps => reducerDictionary[action.type] ? reducerDictionary[action.type](state, action) : state;

export { reducer };