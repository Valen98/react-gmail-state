import { useState } from 'react'
import Header from './components/Header'
import emails from './data/emails'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  //console.log(initialEmails)
  
  const [emails, setEmails] = useState(initialEmails)
  const starredEmails = emails.filter((email) => email.starred === true)
  const emailsUnread = emails.filter((email) => email.read === false)
  const [unreadEmails, setUnreadEmail] = useState(emailsUnread)
  const [showRead, setShowRead] = useState(false)
  
  const toggleStarred = (target) => {
    const updateEmail = emails.map((email) => 
      email.id === target ? { ...email, starred: !email.starred} : email
    )
    setEmails(updateEmail)
  }

  const toggleRead = (target) => {
    const updateEmail = emails.map((email) => 
      email.id === target.id ? { ...email, read: !email.read} : email
    )
    setEmails(updateEmail)

  }

  const toggleUnreadOnly = () => {
    setShowRead(!showRead)
    setUnreadEmail(emailsUnread) 
    return showRead
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
            <span className="count">{emailsUnread.length}</span>
          </li>
          <li
            className="item"
            onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={showRead}
              onChange={() => {toggleUnreadOnly()}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {
        showRead ? unreadEmails.map((email) => (
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
        )): emails.map((email) => (
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
        )) }
      </main>
    </div>
  )
}

export default App