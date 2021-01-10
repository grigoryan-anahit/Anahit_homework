import Preloader from "../../components/preloader";
import React from 'react';

class Client extends React.Component {
    state = {
        client: null
    }
    render() {
        if (!this.state.client) {
            return <Preloader />
        }
        return (
            <div>
                <h1>{this.state.client.name}'s page</h1>
                <div className="card" style={{ width: "18rem" }} >
                    <img className="card-img-top" src="https://propsyteen.ru/wp-content/themes/siteseed/css/girl9.png" alt="Card cap" />
                    <div className="card-body">
                        <p>{this.state.client.name}</p>
                        <p>{this.state.client.username}</p>
                        <p>{this.state.client.email}</p>
                        <p>{this.state.client.phone}</p>
                        <p>{this.state.client.address}</p>

                    </div>
                </div>

            </div>

        )

    }




    componentDidMount() {
        (async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id);
            const data = await response.json();
            this.setState(prevState => ({
                ...prevState,
                client: data
            }))

        })()
    }

}
export default Client;