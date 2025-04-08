import {client, fanoAPI, davidAPI} from '../API'


export const getData = async () => {
    try {
        const [res1, res2, res3] = await Promise.all([
            client.get('/'),
            fanoAPI.get('/'),
            davidAPI.get('/')
        ])

        const clientData = res1.data.map(item => ({...item, source: 'Mathew'}))
        const fanoAPIData = res2.data.map(item => ({...item, source: 'Arnne'}))
        const davidAPIData = res3.data.map(item => ({...item, source: 'David'}))

        const allApiData = [...clientData, ...fanoAPIData, ...davidAPIData];

        return allApiData

    } catch {
        const err = error
        console.log(err.messsage)
        console.log(err.name)
        return [] // array
    }
}