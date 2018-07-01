import React from 'react';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import messages from './messages';
import { search } from './actions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {

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
};


const mapStateToProps = createSelector(
);

const mapDispatchToProps = (dispatch) => ({
  search: dispatch(search),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
