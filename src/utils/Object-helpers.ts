import {UserType} from "../dal/api";


export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: string, newObjProps: any) => {
    return items.map((user: any) => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps}
        }
        return user
    })
}