import Link from 'next/link'
import { Button, Card } from 'semantic-ui-react'
import fetchAllNotesData from '../utils/dbClient'

const Index = ({ props }) => {
  return (
    <div className='props.notes-Container'>
      <h1>notes</h1>
      <div className='grid wrapper'>
        {props.notes.map(note => {
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const notes = await fetchAllNotesData()
  if (notes.error != null) {
    console.log("whoopty")
  }
  return {
    props: {
      notes: JSON.parse(JSON.stringify(notes))
    }
  }
}

export default Index
