/**
 *
 * @format
 */

import roleProps from 'src/roleProps';
import ariaProps from 'src/ariaProps';
import dataProps from 'src/dataProps';

const compose = () => {};

export default globals = {
  
  propTypes: {
    ...roleProps.propTypes,
    ...ariaProps.propTypes,
    ...dataProps.propTypes
  },
  
  defaultProps: {
    ...roleProps.defaultProps,
    ...ariaProps.defaultProps,
    ...dataProps.defaultProps
  }

};
