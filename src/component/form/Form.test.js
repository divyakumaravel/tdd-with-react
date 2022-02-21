import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { render } from '@testing-library/react';

describe('Form', () => {
    let container

    beforeEach(() => (container = shallow(<Form />)))

    it('should render a form', () => {
        expect(container.find('form').length).toEqual(1);
    });

    it('should have a heading', () => {
        expect(container.find('h2').text()).toEqual('What needs to be done?');
    });

    it('should contain add button', () => {
        const { getByTestId } = render(<Form />);
        const addButton = getByTestId('add');
        expect(addButton).toBeInTheDocument();
    });

});
