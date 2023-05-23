import { HomeAdapter } from "@/models/adapter/homeAdapter";
import { GlobalDatasProps } from "..";

export const setHomeData = (state: GlobalDatasProps, action: any) => {
    const { payload } = action;
    const data = HomeAdapter.createHomeData(payload.data);
    return {
        ...state,
        home: {
            data: data,
            error: !payload.action ? true : null,
            isLoading: false
        }
    };
};

export const setHomeError = (state: GlobalDatasProps, action: any) => {
    const { payload: { error } } = action;
    return {
        ...state,
        home: {
            ...state.home,
            error
        }
    }
};

export const setHomeLoading = (state: GlobalDatasProps, action: any) => {
    const { payload: isLoading } = action;
    return {
        ...state,
        home: {
            ...state.home,
            isLoading
        }
    }
};