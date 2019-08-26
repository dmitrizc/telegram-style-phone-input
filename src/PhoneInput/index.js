import React from 'react';
import PropTypes from 'prop-types';
import inputFormatPhoneInit from './core';
import './style.scss';

class PhoneInput extends React.Component {
  componentDidMount () {
    inputFormatPhoneInit(
      this.props.initialCountry,
      this.props.initialNumber,
      this.handleChange);
  }

  handleChange = (code, number, countryCode, countryName) => {
    this.props.onChange(code + number, countryCode, countryName, code, number);
  };

  render () {
    return <div className="phone-input-telegram">
      <div className="login_form_group" id="login-form-group">
        <div className="login_country_field_wrap" id="login-country-wrap">
          <div className="login_country_select" id="login-country-selected" data-placeholder="Unknown country"/>
          <div className="login_country_search_wrap">
            <div className="textfield-item" id="login-country-search-textfield">
              <input type="text" className="form-control" id="login-country-search" autoComplete="off"
                     placeholder="Search"/>
            </div>
            <div className="login_country_search_results" id="login-country-search-results"
                 data-noresult="Country not found"/>
          </div>
        </div>

        <div className="login_phone_field_wrap">
          <div className="login_code_field_wrap">
            <div className="textfield-item" id="login-phone-code-textfield">
              <input type="tel" className="form-control" id="login-phone-code" autoComplete="off"/>
            </div>
          </div>
          <div className="login_number_field_wrap">
            <div className="textfield-item" id="login-phone-textfield">
              <input type="tel" className="form-control" id="login-phone" autoComplete="off"/>
              <span className="textfield-item-placeholder" id="login-phone-placeholder"
                     data-placeholder="Phone number"/>
              <span className="textfield-item-error login_form_message" id="login-alert"/>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

PhoneInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialCountry: PropTypes.string,
  initialNumber: PropTypes.string,
};

PhoneInput.defaultProps = {
  initialCountry: '',
  initialNumber: '',
};

export default PhoneInput;