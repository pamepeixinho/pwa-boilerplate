import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
// import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Button from '@material-ui/core/Button';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import messages from './messages';
import { search } from './actions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.search();
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Button color="primary" variant="raised"> test </Button>
      </div>
    );
  }
}

HomePage.propTypes = {
  search: PropTypes.func.isRequired,
};


// const mapStateToProps = createSelector(
// );

const mapDispatchToProps = (dispatch) => ({
  search: () => dispatch(search()),
});

export default compose(
  injectReducer(
    { key: 'homePage', reducer },
  ),
  connect(null, mapDispatchToProps)
)(HomePage);
