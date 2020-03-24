import * as React from 'react';
import { saveState, loadState } from '../../services/local-storage-service'
import { LoginState } from './reducer'
import { connect } from 'react-redux';

export type Props = {
  label: string;
  count: number;
  onIncrement ?: () => void;
};

const mapStateToProps = (state: LoginState, ownProps: Props) => ({
    count: state.reduxLogin || ownProps.count,
  });

class Login extends React.Component<Props> {

  constructor(props: Props){
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement = () => {
    if(this.props.onIncrement)
        this.props.onIncrement() 
    else 
        return null;
  }

  componentDidUpdate = (prevProps: Props) => {
    if(!! prevProps){
        saveState(this.props);
    }
  }

  render() {
      var present = loadState() as Props;
      var label, count;
      if(!!present){
        label = present.label;
        count = present.count;
      }
      else{
        label = this.props.label;
        count = this.props.count;
      }
      return (
        <div>
          <span>
            {label}: {count}
          </span>
          <button type="button" onClick={this.handleIncrement}>
            {`Increment`}
          </button>
        </div>
      );
  } 
};

export const page = connect(mapStateToProps)(Login)
