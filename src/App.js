import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [messages, setMessages] = useState([
    {
      'id': '00001',
      'sender': 'john_doe31@mail.com',
      'recipient': 'me',
      'title': 'Meeting Notes',
      'content': 'Based on the meeting we had on Tuesday, we have decided to move forward with the project. We will be meeting again on Friday to discuss the next steps.',
      'sendDate': '5:33pm',
      'status': 'unread'
    },
    {
      'id': '00002',
      'sender': 'carly_53@mail.com',
      'recipient': 'me',
      'title': 'Tuesday Lunch',
      'content': 'Hey, I was thinking we could go to the new restaurant that opened up on 5th street. I heard they have great food.',
      'sendDate': '5:21pm',
      'status': 'unread'
    },
    {
      'id': '00003',
      'sender': 'mike_82@gmail.com',
      'recipient': 'me',
      'title': 'A message from Mike',
      'content': 'Hey man, I just wanted to let you know that I will be out of town for the next few days. I will be back on Monday.',
      'sendDate': '4:32pm',
      'status': 'unread'
    }
  ])

  const [showingInbox, setShowingInbox] = useState(false)
  const [messagesLength, setMessagesLength] = useState(messages.length)
  const [showingMessage, setShowingMessage] = useState(false)
  var checkedMessages = []

  const [layout, setLayout] = useState('row')

  const [selectedMessage, setSelectedMessage] = useState({})

  const [currentCategory, setCurrentCategory] = useState('')

  const handleMessagesClick = () => {
    setShowingInbox(true)
    setCurrentCategory('inbox')
  }

  const handleMessagesSelect = (message) => {
      message.status = 'read';
      setShowingMessage(true);
      setSelectedMessage(message);
  };

  const handleDeleteMessage = () => {
    console.log('Deleted')
  }

  const respondToMessage = (message) => {
    console.log('Responding to message')
  }

  const handleCheckMessage = (message) => {

    if(checkedMessages.includes(message.id)){
      const index = checkedMessages.findIndex(msg => msg === message.id);
      checkedMessages.splice(index, 1);
    }
    checkedMessages.push(message.id)
    console.log(checkedMessages)
  }


  const unreadMessages = messages.filter(message => message.status === 'unread');
  const otherMessages = messages.filter(message => message.status !== 'unread');

  return (
    <div className=" w-screen h-screen flex flex-row">

    <div className = "flex flex-col w-32 h-auto gap-2 m-4 bg-white">

    <button onClick = "composeMessage" className = "flex items-center gap-2 bg-slate-200 p-2 w-fit rounded-md ring-1 ring-slate-300">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
</svg>Compose</button> 

        <div className="bg-white w-64">
          <div onClick={handleMessagesClick} className={currentCategory === 'inbox' ? "flex flex-row gap-2 w-fit text-sm items-center px-4 py-1 bg-slate-200 rounded-full" : "flex flex-row gap-2 w-fit text-sm items-center px-4 py-1 hover:bg-slate-200 hover:cursor-pointer rounded-full"}>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>


            {/* <p className="flex flex-row gap-2 w-full">Inbox <span className="bg-slate-500 px-2 py-0.5 text-xs rounded-full text-white ">{messagesLength}</span></p> */}

            {/* if currentCategory is inbox, show background as gray */}
            <p>Inbox <span className="bg-slate-500 px-2 py-0.5 text-xs rounded-full text-white ">{unreadMessages.length}</span></p>
          </div>
        </div>

      
        <div className="bg-white w-64">
          <div onClick={handleMessagesClick} className={currentCategory === 'sent' ? "flex flex-row gap-2 w-fit text-sm items-center px-4 py-1 bg-slate-200 rounded-full" : "flex flex-row gap-2 w-fit text-sm items-center px-4 py-1 hover:bg-slate-200 hover:cursor-pointer rounded-full"}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>



            {/* <p className="flex flex-row gap-2 w-full">Inbox <span className="bg-slate-500 px-2 py-0.5 text-xs rounded-full text-white ">{messagesLength}</span></p> */}

            {/* if currentCategory is inbox, show background as gray */}
            <p>Sent</p>
          </div>
        </div>

        <div className="bg-white w-64">
          <div onClick={handleMessagesClick} className={currentCategory === 'archive' ? "flex flex-row gap-2 w-fit text-sm items-center px-4 py-1 bg-slate-200 rounded-full" : "flex flex-row gap-2 w-fit text-sm items-center px-4 py-1 hover:bg-slate-200 hover:cursor-pointer rounded-full"}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
</svg>



            {/* <p className="flex flex-row gap-2 w-full">Inbox <span className="bg-slate-500 px-2 py-0.5 text-xs rounded-full text-white ">{messagesLength}</span></p> */}

            {/* if currentCategory is inbox, show background as gray */}
            <p>Archive</p>
          </div>
        </div>

      </div>

      {showingInbox && (
        <div className="h-auto m-2 w-full bg-slate-200">

          <div className = "m-2 w-auto flex flex-row gap-2 justify-between">
            <input type="text" placeholder="Search by sender, recipents..." className="bg-white p-2 text-sm rounded-lg w-96 ring-1 ring-slate-300"></input>

            <div className="rounded-md p-1 bg-white ring-1 ring-slate-300">
              <button onClick={() => setLayout('row')} className={layout == 'row' ? "bg-slate-200 p-1 rounded-md" : "bg-white p-1 rounded-md"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
              </button>
              <button onClick={() => setLayout('column')} className={layout == 'column' ? "bg-slate-200 p-1 rounded-md" : "bg-white p-1 rounded-md"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              </button>
            </div>
          </div>

          {checkedMessages.length > 0 && (
          <div className = "p-2 flex gap-2">
            
            <button onClick = {respondToMessage} className = "bg-white hover:bg-white px-2 py-1 text-sm font-base flex flex-row gap-2 items-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
              </svg>
              Reply
              </button>  
              
              <button onClick = "respondToMessage" className = "bg-white hover:bg-white px-2 py-1 text-sm font-base flex flex-row gap-2 items-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
  <path fillRule="evenodd" d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z" clipRule="evenodd" />
</svg>

              Mark as Unread
              </button>  
              <button onClick = "respondToMessage" className = "bg-white hover:bg-white px-2 py-1 text-sm font-base flex flex-row gap-2 items-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
  <path d="M10 2a.75.75 0 0 1 .75.75v5.59l1.95-2.1a.75.75 0 1 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0L6.2 7.26a.75.75 0 1 1 1.1-1.02l1.95 2.1V2.75A.75.75 0 0 1 10 2Z" />
  <path d="M5.273 4.5a1.25 1.25 0 0 0-1.205.918l-1.523 5.52c-.006.02-.01.041-.015.062H6a1 1 0 0 1 .894.553l.448.894a1 1 0 0 0 .894.553h3.438a1 1 0 0 0 .86-.49l.606-1.02A1 1 0 0 1 14 11h3.47a1.318 1.318 0 0 0-.015-.062l-1.523-5.52a1.25 1.25 0 0 0-1.205-.918h-.977a.75.75 0 0 1 0-1.5h.977a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.73c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h.977a.75.75 0 0 1 0 1.5h-.977Z" />
</svg>

              Archive
              </button>  
              <button onClick = "respondToMessage" className = "bg-white hover:bg-white px-2 py-1 text-sm font-base flex flex-row gap-2 items-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
</svg>

              Forward
              </button>  
          </div>  
          )
          }

          {/* if the layout state is row, flex row. If it is column, flex column */}
          <div className = {layout == 'row' && showingMessage ? "grid grid-cols-2 h-full" : "flex flex-col"}>

          <div className="bg-slate-200 h-full m-2 ring-1 ring-slate-300 w-auto">

            {messages.map((message, index) =>

              {if (message.status === 'unread') {
                return (
              <div key={index} onClick={(e) => handleMessagesSelect(message)} className="grid grid-cols-5 p-2 ring-1 ring-slate-300 hover:cursor-pointer hover:shadow-md">
                <div className="flex gap-2">
                  <input onChange = {(e) => handleCheckMessage(message)} type="checkbox" className="h-4 w-4"></input>
                  <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.sender}</h1>
                </div>
                <div className="flex gap-2">
                  <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.title}</h1>
                </div>
                <div className="flex gap-2">
                  <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.content.slice(0, 30) + '...'}</h1>
                </div>
                <div></div>
                <div className="flex gap-2 justify-between">
                  <div className="flex gap-2">
                    <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.sendDate}</h1>
                  </div>                <div>
                    <button className="hover:bg-slate-200 p-1" onClick={handleDeleteMessage}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-slate-500">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                      </svg>

                    </button>
                    <button className="hover:bg-slate-200 p-1" onClick={handleDeleteMessage}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-slate-500">
                        <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                      </svg>


                    </button>
                  </div>
                </div>
              </div>
                )
              }
              else{
                return(
                  

                  <div key={index} onClick={(e) => handleMessagesSelect(message)} className="grid grid-cols-5 p-2 ring-1 ring-slate-300 hover:cursor-pointer hover:shadow-md">
                <div className="flex gap-2">
                  <input onChange = {(e) => handleCheckMessage(message)} type="checkbox" className="h-4 w-4"></input>
                  <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.sender}</h1>
                </div>
                <div className="flex gap-2">
                  <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.title}</h1>
                </div>
                <div className="flex gap-2">
                  <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.content.slice(0, 30) + '...'}</h1>
                </div>
                <div></div>
                <div className="flex gap-2 justify-between">
                  <div className="flex gap-2">
                    <h1 className={message.status === 'unread' ? "font-semibold text-sm" : "text-xs font-light"}>{message.sendDate}</h1>
                  </div>                <div>
                    <button className="hover:bg-slate-200 p-1" onClick={handleDeleteMessage}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-slate-500">
                        <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                      </svg>

                    </button>
                    <button className="hover:bg-slate-200 p-1" onClick={handleDeleteMessage}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 fill-slate-500">
                        <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                      </svg>


                    </button>
                  </div>
                </div>
              </div>
                )
              }

              }
            )}
            
            

          </div>

          {showingMessage && (
            <div className="bg-white rounded-md h-fit m-2 ring-1 ring-slate-300 w-auto p-2 gap-2 flex flex-col">
              <div className="flex flex-row gap-2 items-center pb-5">
                <div className="rounded-full w-8 h-8 flex items-center text-center bg-slate-400 justify-center">
                  <p className="text-white">{selectedMessage.sender.charAt(0).toUpperCase()}</p>
                </div>
                <div className = "flex flex-col">
                <h1 className="font-light text-sm"><span className = "font-semibold">From: </span>{selectedMessage.sender}</h1>
                <h1 className="font-light text-sm"><span className = "font-semibold">To: </span>{selectedMessage.recipient}</h1>
                </div>
              </div>
              <div className="px-8 pb-4">
                <h1 className="font-semibold">{selectedMessage.title}</h1>
                <p className="text-sm">{selectedMessage.content}</p>
                <div className="flex flex-row gap-2 items-center pt-4">
                  <button className="bg-white hover:bg-white px-2 py-1.5 hover:bg-slate-100 text-sm font-base flex flex-row gap-2 items-center rounded-lg ring-1 ring-slate-300" onClick={(e) => respondToMessage(selectedMessage)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" />
                    </svg>
                    Reply</button>
                  <button className="bg-white hover:bg-white px-2 py-1.5 hover:bg-slate-100 text-sm font-base flex flex-row gap-2 items-center rounded-lg ring-1 ring-slate-300" onClick={(e) => respondToMessage(selectedMessage)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                    </svg>

                    Delete</button>
                </div>
              </div>


            </div>
          )}
        </div>
        </div>

      )}
    </div>
  );
}

export default App;
