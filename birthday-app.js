import List from './birthday-List'
import data from './../Component/project-birthday/birthday-data'
import {useState} from 'react'

function App () {
const [people,setPeople] = useState(data)
const [cleanMode, setCleanMode] = useState(false);
function handleRefresh() {
people.length === 0 ? setPeople(data): setCleanMode(false)
}
    return (
    <>
    <main>
        <section className='container'>
            <List cleanMode={cleanMode} people={people} />
            <button onClick={()=>setPeople([])}>clear all</button>
            <button  disabled={people.length === 0} onClick={() => setCleanMode(!cleanMode)}>{people.length > 0 ? (!cleanMode ? 'clear details ' : 'restore details ') : 'has been disabled'}</button>
            <button onClick={handleRefresh}>Refresh all</button>
        </section>
    </main>
    </>
 )
}
export default App

