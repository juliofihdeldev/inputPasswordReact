import React from 'react';
import './password_input.css';



class PasswordInput extends React.Component {

  static defaultProps = {
    value: '',
    className: '',
    placeholder: '',
    showBar: true,
    passwordInputStyle: {
      height: '28px',
      width: '98%'
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
      value: ''
    };
  }

  toggleType = () => {
    if (this.state.type === 'password') {
      this.setState({
        type: 'text'
      })
    } else {
      this.setState({
        type: 'password'
      })
    }
  }


  handleChange = (event) => {
    const { target } = event; // destruction
 
    this.setState({
      value: target.value
    });

    this.props.onChange({
      name: this.props.name,
      value: target.value,
    });
  }


  render() {
    const {
      name,
      value,
      placeholder,
      showBar,
      passwordInputStyle
    } = this.props; 

    let { type } = this.state

    var regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return (
      <>
        <div>
          <div className="contentPAssword">
            <input type={type} placeholder={placeholder}
              className="passwordInputStyle"
              style={passwordInputStyle} // bug to find why 
              name={name}
              // value={value}
              onChange={this.handleChange} />
            
              <ion-icon name="eye-outline"
              className="iconStyle"
              onClick={this.toggleType}>
              </ion-icon>
          </div>
        </div>
        {showBar ? 
        <div className={
          this.state.value !=='' ?
          this.state.value.match(regexp) ? 'success':'warning' : null
          }>
          <hr style={{border:'none', height:8, borderRadius: 100,}}/>           
          </div>
          :null }
      </>
    );
  }
}

export default PasswordInput;
