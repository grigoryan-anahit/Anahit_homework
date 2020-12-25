import React from 'react';
import { UsersContext } from '../contexts';


class UsersProviders extends React.Component {
    state = {
        users: [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: "Gwenborough",
            },
            {
                id: 2,
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv",
                address: "Wisokyburgh",
            },
            {
                id: 3,
                name: "Clementine Bauch",
                username: "Samantha",
                email: "Nathan@yesenia.net",
                address: "Suite 847",
            },
            {
                id: 4,
                name: "Patricia Lebsack",
                username: "Karianne",
                email: "Julianne.OConner@kory.org",
                address: "South Elvis",
            },
            {
                id: 5,
                name: "Chelsey Dietrich",
                username: "Kamren",
                email: "Lucio_Hettinger@annie.ca",
                address: "Roscoeview",
            },
            {
                id: 6,
                name: "Mrs. Dennis Schulist",
                username: "Leopoldo_Corkery",
                email: "Karley_Dach@jasper.info",
                address: "Apt. 950",
            }
        ],
        isUserAccess:false
    }
    toggleUserAccess = () => {
        this.setState((prevState) => ({
          ...prevState,
          isUserAccess: !prevState.isUserAccess
        }))
      }
    
    render() {
        return <UsersContext.Provider
            value={{
                state: this.state,
                toggleUserAccess:this.toggleUserAccess
            }}
        >
            {this.props.children}
        </UsersContext.Provider>
    }
}
export default UsersProviders;