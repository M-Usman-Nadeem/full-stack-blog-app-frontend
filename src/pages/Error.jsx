import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err=useRouteError()
  return (
    <>
    <div>Error</div>
    <div>
        {
            err.statusText || error.message
        }
    </div>
    </>

  )
}

export default Error