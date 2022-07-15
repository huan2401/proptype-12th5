import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { store } from '@/configuration/store';

const StoreProvider: React.FC = ({ children }) => (
  <>
    <Provider store={store}>{children}</Provider>
  </>
);

StoreProvider.propTypes = {
  children: PropTypes.any,
};

export default StoreProvider;
