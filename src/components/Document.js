import React, { useState } from 'react'
import {useSelector} from 'react-redux'

function Document() {

  const document=useSelector((state)=>state.document.value);
  return (
    <div>
    <p>{document.doc_name}</p>

    </div>
  )
}

export default Document