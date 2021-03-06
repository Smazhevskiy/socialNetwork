import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchToProps

type MapDispatchToProps = {
    logout: () => void
}
type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {logout})(HeaderContainer)