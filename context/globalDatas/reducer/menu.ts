import { getMenuItemsWithChildeFormat } from "@/helper/menus";
import { GlobalDatasProps } from "..";
import { socialIcons, socialIconsFooter } from "@/constants/options";


export const setMenuData = (state: GlobalDatasProps, action: {
    type: 'SET_MENU_DATA';
    payload: any | null;
}) => {
    const { payload: { data } } = action;
    const allMenuItems = getMenuItemsWithChildeFormat(data.items);
    const menuItems = allMenuItems.filter(items => items.title !== 'Top Header');
    const topHeaderItems = allMenuItems.find(item => item.title === 'Top Header').children;
    const social = data.social.items.map(socialItem => ({
        ...socialItem,
        ...(socialIcons[socialItem.title] && { iconComponent: socialIcons[socialItem.title] })
    }));
    const socialFooterIcons = data.social.items.map(socialItem => socialIconsFooter[socialItem.title] || null);
    const contactInfo = data.items.reduce((acc, item) => {
        acc[item.title] = {
            title: item.title,
            id: item.id,
            url: item.url
        };
        return acc;
    }, {});

    return {
        ...state,
        menus: {
            ...state.menus,
            data: {
                ...data,
                menuItems,
                topHeaderItems,
                social,
                socialFooterIcons,
                contactInfo
            },
            error: null,
            isLoading: false
        }
    }
};

export const setMenuError = (state: GlobalDatasProps, action: {
    type: 'SET_MENU_ERROR';
    payload: any;
}) => {
    const { payload: { error } } = action;
    return {
        ...state,
        menus: {
            ...state.menus,
            error
        }
    };
};

export const setMenuLoading = (state: GlobalDatasProps, action: {
    type: 'SET_MENU_LOADING';
    payload: boolean;
}) => {
    const { payload: isLoading } = action;
    return {
        ...state,
        menus: {
            ...state.menus,
            isLoading
        }
    };
};