import { useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'
import NewNoteCard from './components/NewNoteCard'
import NoteCard from './components/NoteCard'

export default function App() {

  interface Note {
    id: string
    date: Date
    content: string
  }

  const [notes, setNotes] = useState<Note[]>([])

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    setNotes([newNote, ...notes])
  }

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <img src={logo} alt="logo" />
      <form className='w-full'>
      <input 
        type="text" 
        placeholder='Buque em suas notas...'
        className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500' />
      </form>
      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]'>

        <NewNoteCard onNoteCreated={onNoteCreated} />
        {
          notes.map((note)=>{
            return <NoteCard key={note.id} note={note}/>
          })
        }

      </div>
    </div>
  )
}
