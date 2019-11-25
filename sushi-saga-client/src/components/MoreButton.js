import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(event) => props.moreSushi(event)}>
            More sushi!
          </button>
}

export default MoreButton  