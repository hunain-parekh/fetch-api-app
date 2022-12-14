import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({handleAdd}) {
  const [enteredTitle, setEnteredTitle] = useState('');

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const value = {
      userId: 3,
      id: Math.floor(Math.random() * 10000) + 1,
      title: enteredTitle,
      body: 'hy',
    };

    // test checking code
    handleAdd(value);
    setEnteredTitle('');

    // if you want to check production api comment the test check code and comment out below code

    //production code
    // fetch(process.env.REACT_APP_API_URL, {
    //   method: 'POST',
    //   body: JSON.stringify(value),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     handleAdd(result);
    //     setEnteredTitle('');
    //   });

    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>Save</button>
    </form>
  );
}

export default NewPost;
