import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes, useState,
} from 'react'
import s from './SuperCheckbox.module.css'
import {Simulate} from 'react-dom/test-utils';
import change = Simulate.change;
import {Checkbox} from '@mui/material';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        id,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {




        const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            // задачка на написание онченджа
            const Checkbox = () => {
                // Шаг 2: Создаем состояние для чекбокса
                const [change ,setChange] = useState(false);
                // Шаг 3: Обработчик изменений
                setChange(e.currentTarget.checked); // Обновляем состояние чекбокс

            }
        }
    const finalInputClassName = s.checkbox
        + (className ? ' ' + className : '')

    return (
        <label className={s.label}>
            <input
                id={id}
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children && (
                <span
                    id={id ? id + '-span' : undefined}
                    className={s.spanClassName}
                >
                    {children}
                </span>
            )}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}

export default SuperCheckbox
