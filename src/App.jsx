import { useState } from 'react'
import Header from './components/Header'
import emails from './data/emails'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  //console.log(initialEmails)
  
  const [emails, setEmails] = useState(initialEmails)


  const toggleStarred = (target) => {
    const updateEmail = emails.map((email) => 
      email.id === target ? { ...email, starred: !email.starred} : email
    )
    setEmails(updateEmail)

    console.log(updateEmail)
  }

  const toggleRead = (target) => {
    const updateEmail = emails.map((email) => 
      email.id === target.id ? { ...email, read: !email.read} : email
    )
    setEmails(updateEmail)
    
    console.log(updateEmail)
  }


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li
            className="item"
            onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count"></span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map((email) => (
           <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
           <div className='select'>
             <input className='select-checkbox'
             type='checkbox'
             onClick={() => toggleRead(email)}/>
           </div>
           <div className='star'>
              <input className={`star-checkbox`}
              type='checkbox'
              onChange={() => toggleStarred(email.id)}
              checked={email.starred}/>
           </div>
           <div className='sender'>
             {email.sender}
           </div>
           <div className='title'>
             {email.title}
           </div>
         </li>
        ))}
      </main>
    </div>
  )
}

export default App
