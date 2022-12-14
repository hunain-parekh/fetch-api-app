import React from 'react';
import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockData from './MockData';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

beforeEach(() => {
    fetchMock.resetMocks();
  });

describe('<App /> tests', () => {
    it('renders <App /> with api', async () => {
        await fetchMock.once(JSON.stringify(mockData));
        render(<App/>);
        await waitForElementToBeRemoved(()=> screen.getByText(/loading.../i));
      })

    it('should post new data to api',async()=>{
        render(<App/>);
        userEvent.type(screen.getByRole("textbox"), 'my blog 6');
        userEvent.click(screen.getByText(/Save/i));
        expect(screen.getByText(/my blog 6/i)).toBeInTheDocument();
    });
});
  