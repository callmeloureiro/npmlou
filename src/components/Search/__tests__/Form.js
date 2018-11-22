import React from 'react';
import { mount } from 'enzyme';
import { SearchForm } from '../index';

describe('<SearchForm />', () => {
  const mockFn = jest.fn();
  const wrapper = mount(<SearchForm submit={mockFn} />);

  it('renders SearchForm', () => {
    const form = wrapper.find('form');
    expect(form).toHaveLength(1);
  });

  it('should call function on submit', () => {
    const form = wrapper.find('form');
    const input = wrapper.find('input');

    input.instance().value = 'foo';
    form.simulate('submit');

    expect(mockFn).toBeCalled();
  });
});
