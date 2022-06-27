import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function CreateNote(props) {
    const [isExpand, setIsExpand] = useState(false);


    // State variable is used to get the data and store it so that we use it later on
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

  const InputEvent = (event) => {
    
    
    // This is known as object destructuring
    const {name, value} = event.target;

    //   prevData can access all the previous data in useState
      setNote((prevData)=> {
          return {
            //   "...prevData" means I have accessed all the previous data available
              ...prevData,
              [name]: value,
            //   ...prevData,
            //   [name]: value, this is known as spread operator
            // Whenever you need to change the data that stored using state variable tab setData ko update krna padhta hai wo krne ke liye  use spread operator
            

          }

      })

  }

  const addEvent = () => {
      props.passNote(note);

      setNote({
        title: "",
        content: "",
    });

  }

  const expandIt = () => {
    setIsExpand(true);
  };

  const backToOriginal = () => {
    setIsExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToOriginal}>
        <form>
          {isExpand ? (
            <input
              type="text"
              placeholder="Title"
              name="title"
              autoComplete="off"
              value={note.title}
              onChange={InputEvent}
            />
          ) : null}

          <br />
          <textarea
            placeholder="Write a note...."
            rows=""
            coloum="1"
            name="content"
            value={note.content}
            onChange={InputEvent}
            onClick={expandIt}
          ></textarea>

          {isExpand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );



  
}
