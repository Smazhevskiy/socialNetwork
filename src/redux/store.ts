import dialogsReducer, {dialogType, messageType} from "./dialogs-reducer";
import {AllActionTypes} from "./redux-store";
import profileReducer from "./profile-reducer";


export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type friendsType = {
    id: number
    name: string
    img: string
}
export type ProfilePageType = {
    newPostText: string
    posts: PostType[]
    profile:null|any
}
export type DialogsPageType = {
    dialogs: dialogType[]
    messages: messageType[]
    newMessageBody:string
}
export type NavbarPageType = {
    friends: friendsType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbarPage: NavbarPageType
}



export type StoreType = {
    _state:StateType
    _callSubscriber:(_state:StateType)=>void
    getState:() => StateType
    subscribe:(observer: () => void) => void
    dispatch:(action:AllActionTypes) => void
}

export let store :StoreType= {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hello bro', likeCount: 0},
            ],
            profile:[]
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Artem",
                    img: 'https://million-wallpapers.ru/wallpapers/3/56/small/290066904573412.jpg'
                },
                {
                    id: 2,
                    name: "Igor",
                    img: 'https://www.anypics.ru/mini/201211/46834.jpg'
                },
                {
                    id: 3,
                    name: "Kotik",
                    img: 'https://pbs.twimg.com/media/B0-whiRCAAE7hNu.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hey yooo'},
                {id: 2, message: 'Second mesage'},
                {id: 3, message: 'React'},
            ],
            newMessageBody:''
        },
        navbarPage: {
            friends: [
                {
                    id: 1,
                    name: 'user1',
                    img: 'https://besthqwallpapers.com/Uploads/26-8-2016/3512/thumb-cat-red-cat-ginger-cats.jpg'
                },
                {
                    id: 2,
                    name: 'User2',
                    img: 'https://kadinloji.com/resim/thumb/fip-hastaligi-nedir-neden-olur-tedavisi-var-mi-nasil-anlasilir.jpg'
                },
                {
                    id: 3,
                    name: 'User3',
                    img: 'http://tsytaty.ukrayinskoyu.pro/images/temy/kotiv-3.jpg'
                },
            ]
        },
    },
     _callSubscriber : () => {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer)  {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage , action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage , action)
        this._callSubscriber(this._state)
    }
}




export default store