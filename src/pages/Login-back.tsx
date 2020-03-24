import React from 'react';
import {page as Login, Props} from '../components/login/login'

import { LoginState } from '../components/login/reducer'

export class LoginUse extends React.Component<Props, LoginState> {
    constructor(props: Props){
        super(props);
        this.state = {
            reduxLogin: 1,
        };
    }
    render(){
        return (
        <div className="ovarlay_slide_cont">
            我是父组件
            {/* 这个地方如何传入隔离的dispatch？ 2020-03-23 23:19:01 */}
            <Login label="必传label" count={this.state.reduxLogin} onIncrement={()=>this.setState({reduxLogin: this.state.reduxLogin + 1})}/>
        </div>
        )
    }
}
