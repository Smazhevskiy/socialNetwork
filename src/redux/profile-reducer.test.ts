import profileReducer, {addPostActionCreator, deletePostActionCreator, PostType} from "./profile-reducer";

test(' post should be added', () => {
    const startState: any = {
        posts: [
            {id: 1, message: 'post1', likesCount: 12},
            {id: 2, message: 'post2', likesCount: 32},
            {id: 3, message: 'post3', likesCount: 27},
        ]
    };

    const action = addPostActionCreator('newPostMessage');
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[3].message).toBe('newPostMessage')
})

test(' post should be deleted', () => {
    const startState: any = {
        posts: [
            {id: 1, message: 'post1', likesCount: 12},
            {id: 2, message: 'post2', likesCount: 32},
            {id: 3, message: 'post3', likesCount: 27},
        ]
    };

    const action = deletePostActionCreator(2);
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(2)
    expect(endState.posts[0].id).toBe(1)
})

it('after deleting length shouldnt be decrement if id incorrect ',  ()=> {
    let action = deletePostActionCreator(100010000000000)
    const startState: any = {
        posts: [
            {id: 1, message: 'post1', likesCount: 12},
            {id: 2, message: 'post2', likesCount: 32},
            {id: 3, message: 'post3', likesCount: 27},
        ]
    };

    let endState = profileReducer(startState, action )

    expect(endState.posts.length).toBe(3)
});