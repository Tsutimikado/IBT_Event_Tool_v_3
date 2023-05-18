import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context'
import $api from './AxiosInstanse'

export default class PostService{
    //Запрос на получение событий подчинённых отдела
    static async getNextEvents(limit, page) {
        let params={}
        if(limit&&page) params = {_limit:limit, _page:page}
        // const response = await axios.get('http://127.0.0.1:3000/events'
        const response = await $api.get('/get/department-events', {
            params
        })
        return response
    }
    // Запрос на получение событий пользователя
    static async getMyEvents(limit, page) {
        let params={}
        if(limit&&page) params = {_limit:limit, _page:page}
        // const response = await $api.get('http://127.0.0.1:3000/MyEvents', {
            const response = await $api.get('/get/my-events', {
            params
        })
        return response
    }
    // Запрос на получение состояния паноптикума
    static async getAll() {
        const response = await $api.get('/get/panopticon-data')
        return response
    }
        
}