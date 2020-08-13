import React from 'react';
import './styles.scss';

class Card extends React.Component{
  render() {
    const { img, name, description } = this.props;
    return(
      <div className='card'>
        <img className='img' src={img} />
        <div className='text'>
          <span className="name-card">{name}</span>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default Card;