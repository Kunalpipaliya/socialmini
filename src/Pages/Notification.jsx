import React, { useState } from 'react'

const Notification = ({ messages, setMessages, follow, setFollow }) => {
  const [message, setMessage] = useState('')
  const [specificChat, setspecificChat] = useState(false)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const handleMessages = () => {
    if (!message.trim()) return
    const newMessage = {
      conversationId: Date.now(),
      from: currentUser.name,
      to: currentChat,
      message,
      time: hour + ":" + minutes
    }
    setMessages([...messages, newMessage])
    setMessage('')
  }

  const handleBack = () => {
    localStorage.removeItem('currentChat')
    window.location.href = "/notification"
  }
  const handleChat = (following) => {
    // const foundChat=follow.find((f)=>f.following===following&&f.followedBy===currentUser.name)
    localStorage.setItem('currentChat', JSON.stringify(following))
    setspecificChat(true)
  }
  const currentChat = JSON.parse(localStorage.getItem('currentChat'))
  const filterFollowing = follow.filter((f) => f.followedBy === currentUser.name)
  const filterchat = messages.filter((m) => m.from === currentUser.name && m.to === currentChat || m.from === currentChat && m.to === currentUser.name)
  return (
    <div className='container'>

      {
        filterFollowing.map((item, index) => {
          return (

            <div key={index} className={specificChat === true ? "d-none" : "p-2 bg-white shadow-lg rounded mb-2 d-flex  gap-2 align-items-center"} onClick={() => handleChat(item.following)}>
              <i className="fa-solid fa-circle-user fs-1"></i>
              <strong>{item.following}</strong>
            </div>
          )
        })

      }
      <div className={specificChat === false ? 'd-none' : ' d-flex gap-2 align-items-center bg-light shadow-sm rounded border border-1 p-2'}>
        <i className="fa-solid fa-arrow-left" onClick={handleBack}></i>
        <i className="fa-solid fa-circle-user fs-1"></i>
        <h3>{currentChat}</h3>
      </div>
      <div className={specificChat === true ? "chatbox" : "d-none"}>

        {
          specificChat === true ?
            filterchat.map((item, index) => {
              return (

                <div key={index} >
                  <div className={item.from === currentUser.name ? " p-2  alert alert-info  " : " p-2  alert alert-light"}  >
                    <div className="d-flex justify-content-between">

                      <strong>{item.from === currentUser.name ? "you" : item.from}</strong>
                      <small className='text-muted'>{item.time}</small>
                    </div>
                    <hr />
                    <span>{item.message}</span>
                  </div>
                </div>
              )
            })
            : ""
        }
      </div>
      <div className={specificChat === false ? "d-none" : "d-flex gap-2"} style={{ position: "fixed", bottom: "80px", width: "100%" }}>
        <input type="text" className="form-control w-75" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='write a message' />
        <button className="btn btn-primary" type='button' onClick={handleMessages}>send</button>
      </div>
    </div>
  )
}

export default Notification
