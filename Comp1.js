import React,{Component} from 'react';
import './Style.css';

class Comp1 extends Component {
render()
 {
return(<div class="card"><h1>Course : {this.props.name}</h1><p>Author : {this.props.author}</p></div>)
}
}
/*class comp2 extends Component {
render()
 {
return(<h1>Hello</h1>)
}
}*/


export default Comp1;
