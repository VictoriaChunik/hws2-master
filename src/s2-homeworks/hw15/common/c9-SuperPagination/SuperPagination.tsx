import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number //сколько элементов показывать на одной странице
    totalCount: number // общее количество элементов
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    // дописала сама было const lastPage = 10
    const lastPage =   Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц


    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage) // дописала сама  При смене страницы передаем новую страницу + текущее количество элементов
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        // дописала  1. Получить новое значение count из event
        const newCount = event.value
        // 2. Вызвать onChange(1, новое_значение)
        onChange(1, newCount)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
