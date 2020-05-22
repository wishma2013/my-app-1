import React from 'react';
import './panel.scss'
import {LoginForm, Props} from '../components/common/base/loginForm'

//为验证登录令牌及其他业务属性预留 2020-03-24 22:31:03
type State = {
    
}
export class Login extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
    }
    render(){
        return (
        <section>
            <LoginForm {...this.props}/>
        </section>
        )
    }
}