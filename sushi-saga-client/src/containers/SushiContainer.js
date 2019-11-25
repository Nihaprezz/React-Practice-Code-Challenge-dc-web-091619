import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
    
      <div className="belt">
        {
          props.showSushi.map(sushi => {
            return <Sushi key={sushi.id} sushiObj={sushi} ateSushi={props.ateSushi} />
          })
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer