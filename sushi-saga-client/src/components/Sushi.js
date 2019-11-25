import React from 'react'

class Sushi extends React.Component{

  render(){
    let image = this.props.sushiObj.img_url.split("/")[4]
    if(!image) {
      image = "RJGr3Xs.png"
    }    
  
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={(event) => {this.props.ateSushi(event, this.props.sushiObj)}}>
            {this.props.sushiObj.eaten ? null : <img src={require(`../images/${image}`)} alt='sushi' width="100%" />} 
        </div>
        <h4 className="sushi-details">
          {this.props.sushiObj.name} - ${this.props.sushiObj.price}
        </h4>
      </div>
    )

  }  
}

export default Sushi