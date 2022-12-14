import React from 'react';
import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockData from './MockData';
import BlogPosts from './components/BlogPosts';

beforeEach(() => {
    fetchMock.resetMocks();
  });

describe('<App /> tests', () => {
    it('renders <App />', async () => {
        await fetchMock.once(JSON.stringify(mockData));
        render(<App/>);
        await waitForElementToBeRemoved(()=> screen.getByText(/loading/i));
      })
});
  