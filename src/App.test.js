import React from 'react';
import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockData from './MockData';
import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData)
  })
});

describe('<App /> tests', () => {
    it('renders <App /> with api', async () => {
        render(<App/>);
      })

    it('return each title after fatch', async () => {
      render(<App/>);
      await waitForElementToBeRemoved(()=> screen.getByText(/Loading.../i));
      mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
    })

    it('should post new data to api',async()=>{
        render(<App/>);
        await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));
        userEvent.type(screen.getByRole("textbox"), 'my blog 6');
        userEvent.click(screen.getByRole("button"));
        await waitFor(()=>{
          expect(screen.getByRole('button')).not.toHaveTextContent(/Saving.../i);
        })
        expect(screen.getByText(/my blog 6/i)).toBeInTheDocument();
        
    });

    it('should change the button text after post',async()=>{
      render(<App/>);
      await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));
      userEvent.type(screen.getByRole("textbox"), 'my blog 6');
      userEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveTextContent(/Saving.../i);
  });
});
  