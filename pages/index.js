import Link from 'next/link'
import { Button, Card } from 'semantic-ui-react'
import { fetchAllNotesData } from '../utils/dbClient'

const Index = ({ notes }) => {
  return (
    <div className='props.notes-Container'>
      <h1>notes</h1>
      <div className='grid wrapper'>
        {notes.map(note => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <a>{note.title}</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>View</Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const notes = await fetchAllNotesData()
  if (notes.error != null) {
    console.log("whoopty")
  }
  return {
    props: JSON.parse(JSON.stringify(notes))
  }
}

export default Index
