import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

global.fetch = require('jest-fetch-mock');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
