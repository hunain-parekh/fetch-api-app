import { useState } from "react";
import { act } from "react-dom/test-utils";
import classes from './NewPost.module.css';

function NewPost({handleAdd}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [buttonText,setButtonText] = useState('Save');

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setButtonText('Saving...');
    const value = {
      userId: 3,
      id: Math.floor(Math.random() * 10000) + 1,
      title: enteredTitle,
      body: 'hy',
    };

    async function fetchData() {
        await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
      act (()=>{
        setEnteredTitle('');
        setButtonText('Save');
        handleAdd(value);
      })
    }
     fetchData();
    
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>{buttonText}</button>
    </form>
  );
}

export default NewPost;
