export enum DIALOGS_ACTIONS_TYPE{
    SEND_MESSAGE = 'SEND_MESSAGE',
}

export type dialogType = { id: number, name: string, img: string }
export type messageType = { id: number, message: string }
export type DialogsPageStateType = typeof initialState
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
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your s ds'},
        {id: 3, message: 'Hi'},
    ] as messageType[],
}

export type dialogsActionsType = ReturnType<typeof sendMessageCreator>

export const sendMessageCreator = (messageText:string) => ({type: 'SEND_MESSAGE',messageText}as const )

const dialogsReducer = (state: DialogsPageStateType = initialState, action: dialogsActionsType): DialogsPageStateType => {

    switch (action.type) {
        case DIALOGS_ACTIONS_TYPE.SEND_MESSAGE: {
            let newMessage: messageType = {id: 6, message: action.messageText}
            if (action.messageText !== '') {
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            }
            return state
        }
        default :
            return state
    }
}


export default dialogsReducer


