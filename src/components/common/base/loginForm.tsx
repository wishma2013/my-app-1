import * as React from 'react';

export type Props = {
  label: string;
  count: number;
  onIncrement ?: () => void;
  onSubmitForm ?: ()=> void;
};

export type State = {
    label: string;
    count: number;
    onIncrement ?: () => void;
};

// 这个组件占据整页 2020-03-24 15:02:23
export class LoginForm extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
  }

  componentDidUpdate = (prevProps: Props) => {
  }

  render() {
      return (
        <section className="login-body">
                <h1>欢迎回家！</h1>
                <div className="w3ls-login box">
                    <img src={process.env.PUBLIC_URL+"/logo192.png"} alt="logo_img" className="App-logo" />
                    <form method="post" onSubmit={this.props.onSubmitForm}>
                        <div className="agile-field-txt">
                            <input type="email" name="email" placeholder="Your email" required />
                        </div>
                        <div className="agile-field-txt">
                            <input type="password" name="password" placeholder="password" required id="myInput" />
                            <div className="agile_label">
                                <input id="check3" name="check3" type="checkbox" value="show password"/>
                                <label className="check" htmlFor="check3">Remember me</label>
                            </div>
                        </div>
                        <div className="w3ls-bot">
                            <input type="submit" value="LOGIN"/>
                        </div>
                        
                    </form>
                        <input type="button" value="注册"/>
                </div>
                <div className="copy-wthree">
                    <p>
                        Copyright &copy; 2020.MolyTech All rights reserved.
      <a target="_blank" rel="noopener noreferrer" href="http://#">{process.env.REACT_APP_TITLE}</a>
                    </p>
                </div>
        </section>
      );
  } 
};
