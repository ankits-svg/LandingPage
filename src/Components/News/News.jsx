import React from 'react'
import "./News.css"
const News = () => {
  return (
    <div className='news'>
      {/* <h1>News</h1>
       */}
       <div>
        <img src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2020/08/fastco.png" alt="first" width={"40%"}/>
        <p>"Move over Apple Card."</p>
       </div>
       <div>
        <img src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2020/08/cnbc.png" alt="sec" width={"40%"}/>
        <p>"The newest fintech unicorn is a credit card"</p>
       </div>
       <div>
        <img src="https://wsrv.nl/?url=cred.ai/wp-content/uploads/2020/08/forbes.png" alt="third" width={"40%"}/>
        <p>"The ‘Tesla Of Banking’"</p>
       </div>
    </div>
  )
}

export default News
