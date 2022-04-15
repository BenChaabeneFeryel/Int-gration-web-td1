import React from "react";
import Icone from './Icone.js';
import 'font-awesome/css/font-awesome.min.css';

class Pictogramme extends React.Component{
  constructor(props){
    super(props);
    this.state={ msg : 'Bonne découverte des composants React ' }
  }
  
  Changer = ()=>{ 
    this.setState({msg: "Premier défi réussi!"})
  }
  render(){
    return(
      <div>
        {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
        <p>{this.state.msg}</p>
        <Icone />
        <hr />
        <div>
          <button type="button" className="btn no-outline btn-secondary" onClick={this.Changer}>
            <i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
            &nbsp;
            <span className="align-middle">J'aime</span>
          </button>
        </div>
      </div>
    )
  }
}
export default Pictogramme;



