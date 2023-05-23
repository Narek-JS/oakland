export type ReducerAction =
  | { type: 'TOOGLE_IS_OPEN_MENU' }
  | { type: 'TOOGLE_IS_OPEN_FORM_POP_UP' }

  | { type: 'SET_HOME_DATA'; payload: any | null }
  | { type: 'SET_HOME_LOADING'; payload: boolean }
  | { type: 'SET_HOME_ERROR'; payload: any }

  | { type: 'SET_MENU_DATA'; payload: any | null }
  | { type: 'SET_MENU_LOADING'; payload: boolean }
  | { type: 'SET_MENU_ERROR'; payload: any }