import fetch from 'isomorphic-unfetch'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Confirm, Button, Loader } from 'semantic-ui-react'
import { fetchNoteById } from '../../utils/dbClient'

const Note = ({ note }) => {
    const [confirm, setConfirm] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (isDeleting) {
            deleteNote()
        }
    }, [isDeleting])

    const open = () => setConfirm(true)
    const close = () => setConfirm(false)

    const deleteNote = async () => {
        const noteId = router.query.id
        try {
            const deleted = await fetch(`https://next-notes-poc.vercel.app/${noteId}`, {
                method: "Delete"
            });
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true)
        close()
    }

    return (
        <div className="note-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1>{note.title}</h1>
                    <p>{note.description}</p>
                    <Button color='red' onClick={open}>Delete</Button>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    )
}

Note.getInitialProps = async ({ query: { id } }) => {
  const note = await fetchNoteById(id)
  if (note.error != null) {
    console.log("whoopty")
  }
  return {
    note: JSON.parse(JSON.stringify(note))
  }
}

export default Note