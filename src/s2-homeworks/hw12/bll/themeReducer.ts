const initState = {
    themeId: 1,
}

export type ThemeState = {
    themeId: number  // должно совпадать с initState
}

export const themeReducer = (state = initState, action: ChangeThemeIdAction): ThemeState => { // fix any
    switch (action.type) {  // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAction => ({ type: 'SET_THEME_ID', id }) // fix any

export type ChangeThemeIdAction = {
    type: 'SET_THEME_ID'
    id: number
}
