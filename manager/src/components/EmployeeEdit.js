import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
  componentDidMount() {
    const employee = this.props.navigation.getParam('employee');

    _.each(employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    const { uid } = this.props.navigation.getParam('employee');

    this.props.employeeSave({ name, phone, shift, uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
