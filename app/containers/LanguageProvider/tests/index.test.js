import React from 'react';
import { shallow } from 'enzyme';
import { defineMessages } from 'react-intl';
import { LanguageProvider } from '../index';

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
  },
});

describe('<LanguageProvider />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <LanguageProvider messages={messages}>
        {children}
      </LanguageProvider>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});

describe('<ConnectedLanguageProvider />', () => {
  // let store;
  // beforeAll(() => {
  //   store = configureStore({}, browserHistory);
  // });

  // it('should render the default language messages', () => {
  //   const renderedComponent = mount(
  //     <Provider store={store}>
  //       <ConnectedLanguageProvider messages={translationMessages}>
  //         <FormattedMessage {...messages.someMessage} />
  //       </ConnectedLanguageProvider>
  //     </Provider>
  //   );
  //   expect(renderedComponent.contains(<FormattedMessage {...messages.someMessage} />)).toBe(true);
  // });
});
