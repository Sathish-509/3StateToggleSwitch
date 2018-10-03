import React from 'react';
import CustomToggleSwitch from './Widgets/CustomToggleSwitch/CustomToggleSwitch';

class CustomFormGenerator extends React.Component {
  /* istanbul ignore next */
  constructor(props, context) {
    super(props, context);
    this.state = {customToggleSwitchValue : ""};
  }
  handleCustomToggleSwitchChange(outputValue) {
    debugger;
    this.setState({customToggleSwitchValue: outputValue});
  }
  render() {
    debugger;
    return <div>
          <CustomToggleSwitch
            key={"CustomToggleSwitch"}
            value={this.state.customToggleSwitchValue}
            handleCustomToggleSwitchChange={this.handleCustomToggleSwitchChange.bind(this)}
          />
          {"You have chosen: "+this.state.customToggleSwitchValue}
          <div style={{paddingTop:'100px'}}>
          {`Note: left is like button which is like enable or disable the
          toggle switch, in case of disable its value nothing or no value
          if you enable toggle switch will set it to false, you can toggle
          the switch to true/false`}
          </div>
    </div>;
  }
}
export default CustomFormGenerator;
