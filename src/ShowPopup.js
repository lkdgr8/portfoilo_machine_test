import React from 'react'

function ShowPopup({ setOpen, blogContent }) {
    return (
        <>
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='popup-box'>
                        <div className='title'>
                            <h1>{blogContent.title}</h1>
                        </div>
                        <p>{blogContent.body}</p>
                        <button onClick = {() => setOpen(false)}>close</button>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowPopup
