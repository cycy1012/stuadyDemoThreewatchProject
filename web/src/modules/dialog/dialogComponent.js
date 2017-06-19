// import React from 'react';
// import {connect} from 'react-redux'
// import  {Router,Route,hashHistory,Link,IndexRoute,browserHistory} from 'react-router';
// import './dialog.scss'

// export default class DialogExampleModal extends React.Component {
//   propTypes(){
//     options:React.propTypes.bool.isRequired
//   }
//   state(){
//     bounce:'animated bounceIn',
//     fade : 'animated fadeIn'
//   }
//   close(){
//     this.props.options.close()
//   }
//   render() {
//     if(!this.props.options.show){
//       return null
//     }
//     return (
//       <div className='watch' ref='dialog'>
//         <div className="dialog-mask">
//           <div className="dialog-container ${this.state.bounce}">
//               <div className="dialog-title">
//                 {this.props.options.title || '标题'}
//               </div>
//               <div className="dialog-container">
//                   {this.props.options.title || '内容'}
//               </div>
//               <div className="dialog-controls">
//                   <input type="button" value="确定" onClick={this.close.bind(this)}/>
//               </div>
//           </div>
//         </div>
        
//       </div>
//     );
//   }
// }