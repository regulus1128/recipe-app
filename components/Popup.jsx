import React from 'react'
import './Popup.css'

const Popup = ({ content, handleClose }) => {
  return (
    <>  
        <div className="popup-box">
            <div className="box">
                {content}
                {/* <div className="btn">
                    <button onClick={handleClose}>Close</button>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Popup