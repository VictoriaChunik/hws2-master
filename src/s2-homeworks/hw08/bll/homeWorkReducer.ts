import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType):UserType[]  => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // Создаем копию массива, чтобы не мутировать исходный state
            const newState = [...state];

            if(action.payload === 'up'){
                // Сортировка по имени в алфавитном порядке (A-Z)
                newState.sort((a, b) => a.name.localeCompare(b.name));
            }else if (action.payload === 'down') {
                // Сортировка по имени в обратном порядке (Z-A)
                newState.sort((a, b) => b.name.localeCompare(a.name));
            }
            return state // need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)// need to fix
        }
        default:
            return state
    }
}
