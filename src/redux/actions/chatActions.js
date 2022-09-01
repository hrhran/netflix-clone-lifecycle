import { push } from './types'

export const pushAction = value => {
    return { 
        type: push,
        payload : value
 }
}