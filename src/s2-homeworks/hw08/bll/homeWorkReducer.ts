import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state]; // 1. Копируем

            if (action.payload === 'up') {
                newState.sort((a, b) => a.name.localeCompare(b.name)); // 2. Сортируем A→Я
            } else {
                newState.sort((a, b) => b.name.localeCompare(a.name)); // 3. Сортируем Я→A
            }

            return newState;
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload); // Фильтр 18+
        }
        default:
            return state;
    }
}