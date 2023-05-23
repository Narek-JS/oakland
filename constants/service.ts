import {
    MENUS_URL,
    HOME_URL,
    FAQ_URL,
    CONTACT_URL,
    GET_QUOTE,
    PRIVACY_URL,
    TERMS_URL,
    SEARCH_URL,
} from "./api";

import menuData from '../test/menus.json';

// GET Menus
export const getMenus = () => () => new Promise(res => setTimeout(() => {
    res(menuData)
}, 1000)).then((res: any) => res);

// GET Home
export const getHome = () => () => fetch(HOME_URL).then(res => res.json()); 

// GET Faq
export const getFaq = () => () => fetch(FAQ_URL).then(res => res.json());

// GET Contact
export const getContact = () => () => fetch(CONTACT_URL).then(res => res.json());

// get Quote
export const getQuote = () => () => fetch(GET_QUOTE).then(res => res.json());

// GET Privacy
export const getPrivacy = () => () => fetch(PRIVACY_URL).then(res => res.json());

// GET Terms
export const getTerms = () => () => fetch(TERMS_URL).then(res => res.json());

// POST Search
export const sendSearch = (postData: { text: string; page: number }) => fetch(SEARCH_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
});


