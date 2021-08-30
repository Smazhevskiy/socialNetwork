import {AllActionTypes} from "./redux-store";
export enum DIALOGS_ACTIONS_TYPE{
    SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY',
}

export type dialogType = { id: number, name: string, img: string }
export type messageType = { id: number, message: string }
export type InitialStateType = typeof initialState
let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Archi",
            img: 'https://cs4.pikabu.ru/post_img/big/2015/03/10/5/1425968564_1301750843.jpg'
        },
        {
            id: 2,
            name: "Dimich",
            img: 'http://rasfokus.ru/images/photos/medium/71e226a2972b39c54360dfec99765e66.jpg'
        },
        {
            id: 3,
            name: "The_Kot",
            img: 'https://i1.u-mama.ru/111/87b/b3d/3f034929b4556f4a747ca0fd40c29f08.jpg'
        },
    ] as dialogType[],
    messages: [
        {id: 1, message: 'Yoooo man!'},
        {id: 2, message: 'ok bro u rly crazy'},
        {id: 3, message: '))))))))000)0000'},
    ] as messageType[],
    newMessageBody: ''
}
const dialogsReducer = (state: InitialStateType = initialState, action: AllActionTypes): InitialStateType => {

    switch (action.type) {
        case DIALOGS_ACTIONS_TYPE.UPDATE_NEW_MESSAGE_BODY :
            return  {
                ...state,
                newMessageBody: action.body
            }

        case DIALOGS_ACTIONS_TYPE.SEND_MESSAGE:
            let body = state.newMessageBody
            let newMessage: messageType = {id: 6, message: body,}
            if (body !== '') {
                return {
                    ...state,
                    newMessageBody: '',
                    messages: [...state.messages, newMessage]
                }
            }
            return state

        default :
            return state
    }
}
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'}as const )
export const updateNewMessageBodyCreator = (body: string) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body}as const)
export default dialogsReducer