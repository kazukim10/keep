import React from 'react';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'

function App(){

  const [notes, setNote] = React.useState([])

  function addNote(note){
    setNote(prev => {
      return [...prev, note]
    })
    console.log(notes);
  }

  function deleteNote(index){
    setNote(prev => {
      return (
        prev.filter((item, idx) => { return idx !== index })
      )
    })
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map( (note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  )
}

export default App
