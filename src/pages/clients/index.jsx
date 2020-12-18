import React from 'react';
import {Link} from 'react-router-dom';
import Preloader from '../../components/preloader';

class Clients extends React.Component{
  state={
      clients:[]
  }
  render(){
    const clientsJSX = this.state.clients.map(client => {
        return (
            <div className="card" style={{ width: "18rem" }} key={client.id}>
                <img className="card-img-top" src="https://propsyteen.ru/wp-content/themes/siteseed/css/girl9.png" alt="Card cap" />
                <div className="card-body"> 
                    <Link className="card-text" to={`/client/${client.id}`}>{client.name}</Link>
                </div>
            </div>
        )
    })
    if(!this.state.clients.length){
       return  <Preloader />
    }
      return (
        <div>
            <h1>Clients Page</h1>
            <div className="clients">
                    {clientsJSX}
                </div>
        </div>
    )
  }  
  componentDidMount(){
      (async ()=>{
          const response=await fetch('https://jsonplaceholder.typicode.com/users');
          const data=await response.json();
          this.setState(prevState=>({
              ...prevState,
            clients:data
          }))
      }) ()
  }
}
export default Clients;