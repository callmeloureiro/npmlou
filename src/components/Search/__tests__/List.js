import React from 'react';
import { mount } from 'enzyme';
import { SearchList } from '../index';

describe('<SearchList />', () => {
  it('should render SearchList', () => {
    const wrapper = mount(<SearchList />);

    expect(wrapper).toBeDefined();
  });

  it('should render loading when fetching resuts', () => {
    const wrapper = mount(<SearchList results={[]} loading={true} />);
    const loading = wrapper.find('.search__loading');

    expect(loading).toHaveLength(1);
  });

  it('should render message of no elements', () => {
    const wrapper = mount(<SearchList results={[]} loading={false} />);
    const message = wrapper.find('p').text();

    expect(message).toEqual('No results for this search.');
  });

  it('should render items by results', () => {
    const results = [
      {
        package: {
          name: 'Foo',
          description: 'Bar',
          version: '0.0.1',
          links: {
            repository: 'http://foo',
          },
        },
      },
      {
        package: {
          name: 'Bar',
          description: 'Foo',
          version: '0.0.2',
          links: {
            repository: 'http://bar',
          },
        },
      },
    ];

    const wrapper = mount(<SearchList results={results} loading={false} />);
    const items = wrapper.find('li');

    expect(items).toHaveLength(2);
  });
});
