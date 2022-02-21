import React from 'react';
import { shallow, render } from 'enzyme';
import App from './App';
import Todo from './component/todo/Todo';
import Form from './component/form/Form';
import FilterButton from './component/filterButton/FilterButton';

describe('App', () => {
    let container

    beforeEach(() => (container = shallow(<App />)))

    it('should render 2 <div />', () => {
        expect(container.find('div').length).toEqual(2);
    });

    it("should render the Todo Component", () => {
        expect(container.containsMatchingElement(<Todo />)).toEqual(true)
    })

    it("should render the Form Component", () => {
        expect(container.containsMatchingElement(<Form />)).toEqual(true)
    })

    it("should render the Filterutton Component", () => {
        expect(container.containsMatchingElement(<FilterButton />)).toEqual(true)
    })

    it('should have a heading', () => {
        expect(container.find('h1').text()).toEqual('TodoMatic');
    });
});


