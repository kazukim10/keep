import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateNote(props){

  const [note, setNote] = React.useState({title:"", content:""})
  const [checked, setChecked] = React.useState(false);

  function editer(event){
    const {name, value} = event.target

    setNote( prev => {
      return (
        {...prev, [name]: value}
      )
    })
  }

  function checkHandler(){
    setChecked(true)
  }

  function submitForm(event){
    props.onAdd(note)
    setNote({title:"", content:""})
    setChecked(false)
    event.preventDefault()
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitForm}>
        {checked &&
          <input
            onChange={editer}
            name="title"
            placeholder="Title"
            value={note.title} />
        }
        <textarea
          onFocus={checkHandler}
          onChange={editer}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={checked ? "3" : "1"}
        />
        <Zoom in={checked}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  )
}
export default CreateNote;
