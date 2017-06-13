import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCurrentCocktail } from '../actions';

function CocktailsIndex (props) {
  const renderCocktails = (cocktail) => {
    return (<li key={cocktail.id} onClick={() => props.updateCurrentCocktail(cocktail.id)}>
      {/* <Link to={`/cocktails/${cocktail.id}`}> */}
        <p style={{cursor: 'pointer'}}>{cocktail.name}</p>
      {/* </Link> */}
    </li>)
  }

  const stylez = {
    height: 'auto',
    maxHeight: '85vh',
    overflowX: 'hidden',
  }

  return (
  <div>
    <div className='col-md-3' style={stylez}>
      <ul className='list-unstyled' >
        {props.cocktails.map(renderCocktails)}
      </ul>
    </div>
    <div className='col-md-9'>
      {props.children}
    </div>
  </div>
)
};

function mapStateToProps(state){
  return {
    cocktails: state.cocktails
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateCurrentCocktail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsIndex);
