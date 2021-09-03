
export type postType = {
  id: number
    message: string
    likeCount: number
}

export type friendsType = {
    id: number
    name: string
    img: string
}


export type navbarPage = {
    friends: friendsType[]
}



 let store

export default store