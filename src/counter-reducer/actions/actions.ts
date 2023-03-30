export type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

//return implicito
export const doReset = (): CounterAction => ({
    type: 'reset'
})

export const doInCreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: { value }
})