import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Todo', () => {
    let container

    beforeEach(() => {
        (container = shallow(<Todo />));
    })

    it('should render 2 <div />', () => {
        expect(container.find('div').length).toEqual(3);
    });

    it('should contain edit button', () => {
        const { getByTestId } = render(<Todo />);
        const editButton = getByTestId('edit');
        expect(editButton).toBeInTheDocument();
    });

    it('should contain delete button', () => {
        const { getByTestId } = render(<Todo />);
        const deleteButton = getByTestId('delete');
        expect(deleteButton).toBeInTheDocument();
    });

});


