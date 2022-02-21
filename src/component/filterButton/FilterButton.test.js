import React from 'react';
import { shallow, render } from 'enzyme';
import FilterButton from './FilterButton';


describe('FilterButton', () => {
    let container

    beforeEach(() => (container = shallow(<FilterButton />)))

    it('should render a button', () => {
        expect(container.find('button').length).toEqual(1);
    });

});
