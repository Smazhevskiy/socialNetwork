import React, {ChangeEvent, FC} from 'react'
import {UserType} from '../../dal/api'
import Pagination from '@material-ui/lab/Pagination'
import {User} from './User'


export type usersPropsType = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    pageSize: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}


export const Users: FC<usersPropsType> = React.memo((props) => {
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        onPageChanged,
        followingInProgress,
        follow,
        unfollow,
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handleChangePage = (e: ChangeEvent<unknown>, curPage: number) => {
        onPageChanged(curPage)
    }

    return (
        <div>
            <Pagination defaultPage={1} page={currentPage} onChange={handleChangePage} count={pagesCount}
                        color={'secondary'}
                        shape="rounded"
            />
            <div>
                {
                    users.map(u => <User
                        user={u}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />)
                }
            </div>


            <Pagination onChange={handleChangePage} count={pagesCount} color={'secondary'} shape="rounded"/>
        </div>
    )


})