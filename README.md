# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)







App.js

import Routes from "./Routes";

const App = () => {

  return (
    <div >
     
      <Routes />
    </div>
  );
}
export default App;

---------------------------------------------------------

App.css


.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


-----------------------------------------------------------

index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

------------------------------------------------------------

Routes.js


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Update_Player from './components/Update_Player';
import Add_Player from './components/Add_Player'
import Delete_Player from './components//Delete_Player'
import Header from './components/Header';
import Get_AllPlayer from './components/Get_AllPlayer'
import Get_Player_ById from './components/Get_Player_ById'






const Routes = () => {

    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/" > <Get_AllPlayer/> </Route>
                           
                            <Route path="/players" > <Add_Player /> </Route>
                           
                            <Route path="/search_player" > <Get_Player_ById /> </Route>
                            <Route path="/delete_player" > <Delete_Player /> </Route>
                            <Route path="/update_player" > <Update_Player /> </Route>
                           
                        </Switch>
                    </div>
                   
                </div>
            </Router>
        </div>
    );

}
export default Routes;



-------------------------------------------------------------
Add-Players.js

import React from "react"
import { useState,useEffect } from "react"
import axios from "axios";

const Add_Player=()=>{


    const [playerId, setPlayerId] = useState();
    const [playerToAdd,setPlayerToAdd]=useState({})
    const [appPlayer,setAppPlayer]=useState({});
    const dataurl=`http://localhost:3000/players`

    const handlePlayer = (evt) => {
        evt.preventDefault();
        setPlayerToAdd(
            {
                ...playerToAdd,
                [evt.target.name]: evt.target.value
            });
    }

    const submitAddPlayer = (evt) => {
        evt.preventDefault();
        axios.post(dataurl, playerToAdd)
            .then((response) => {
                alert(`Player added successfully `);
            })
            .catch(() => {
                alert("Player could not be added.");
            });

        }
    return (

        <div>
        <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
            <p>Add a New Player</p>
            <form className="form form-group form-primary" onSubmit={submitAddPlayer}>
                <input className="form-control mt-3" type="text" id="name" name="name" value={playerToAdd.name} onChange={handlePlayer} placeholder="Enter Name" />
                <input className="form-control mt-3" type="number" id="id" name="id" value={playerToAdd.id} onChange={handlePlayer} placeholder="Enter Id" />
                <input className="form-control mt-3" type="text" id="team" name="team" value={playerToAdd.team} onChange={handlePlayer} placeholder="Enter Team" />

                <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Player" />
            </form>
        </div>
    </div>



    )
}


export default Add_Player

----------------------------------------------------------------------



Delete_Players.js


import React from "react"
import { useState,useEffect } from "react"
import axios from "axios";


const Delete_Player=()=>{

    const[deletePlayerId,setDeletePlayerId]=useState()
    const dataurl=`http://localhost:3000/players`

    const handleDeleteChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setDeletePlayerId(evt.target.value);
    }


    const submitDeletePlayerById=(evt)=>{
        evt.preventDefault();
        axios.delete(`${dataurl}/${deletePlayerId}`).
        then((response)=>{
            alert("Player Deleted..")
        })
        .catch((err)=>{
            console.log(err)
            alert("Player could not be Deleted..")
        })
    }

    return(

        <div>
        <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
            <p>Delete Player  by id</p>
            <form className="form form-group form-primary" onSubmit={submitDeletePlayerById}>
                <input className="form-control mt-3" type="number" id="deletePlayerId" name="deletePlayerId" value={deletePlayerId} onChange={handleDeleteChange} placeholder="Enter PlayerId" />
                <input className="form-control mt-3 btn btn-primary" type="submit" value="delete Player" />
            </form>
            {/* <p className="text-dark"> <span className="font-weight-bold"> App User Data: </span><br />  {appUser.id} <br />{appUser.name} <br />{appUser.username} <br />{appUser.email} <br />{appUser.phone}</p> */}
            
        </div>
    </div>


    )
}


export default Delete_Player


------------------------------------------------------------

Get_AllPlayers.js

import React from "react"
import { useState,useEffect } from "react"
import axios from "axios";


const Get_AllPlayer=()=>{
    const [playerList,setPlayerList] =useState([])
    const dataurl=`http://localhost:3000/players`


    const getAllPlayers = (evt) => {
        evt.preventDefault();
        axios.get(`${dataurl}`)
            .then((response) => {
                console.log(response.data);
                setPlayerList(response.data);
            })
            .catch(() => {
                alert("Players not found.");
                setPlayerList([]);
            });
    }

    return(

        <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
        <p>Find All Players</p>
        <form className="form form-group form-primary" onSubmit={getAllPlayers}>
            <input className="form-control mt-3 btn btn-primary" type="submit" value="Find All Players" />
        </form>
        <p className="text-dark"> All Players data </p>
        <div><span className="font-weight-bold"> All Players: </span>
            {<div>
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>Team</th>
                        </tr>
                    </thead>
                {playerList.map(item => {
                    return (
                        <tbody>
                     <tr>
                         <td>{item.name}</td>
                         <td>{item.id}</td>
                         <td>{item.team}</td>
                     </tr>
                      </tbody>
                    )
                })}
                </table>
            </div>}
        </div>
    </div>


        
    )
}

export default Get_AllPlayer;



---------------------------------------------------------

Get_Players_ById.js



import React from "react"
import { useState,useEffect } from "react"
import axios from "axios";




const Get_Player_ById=()=>{


    const [playerId, setPlayerId] = useState();
    const [playerList,setPlayerList] =useState([])
    const [playerToAdd,setPlayerToAdd]=useState({})
    const [playerToUpdate,setPlayerToUpdate]=useState({})
    const [appPlayer,setAppPlayer]=useState({});
    const[deletePlayerId,setDeletePlayerId]=useState()
    const dataurl=`http://localhost:3000/players`

    const submitGetPlayerById = (evt) => {
        evt.preventDefault();
        axios.get(`${dataurl}/${playerId}`)
            .then((response) => {
                console.log(response.data);
                setAppPlayer(response.data);
            })
            .catch(() => {
                alert("User not found.");
                setPlayerId();
            });
    } 


    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setPlayerId(evt.target.value);
    }
   
    
    return(
        <div>
        <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find Player  by id</p>
                    <form className="form form-group form-primary" onSubmit={submitGetPlayerById}>
                        <input className="form-control mt-3" type="number" id="playerId" name="playerId" value={playerId} onChange={handleChange} placeholder="Enter PlayerId to search" />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Player" />
                    </form>
                    
                    <div>
                        <span className="font-weight-bold">Player Data: </span><br /> 
                        <table className="table">

                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Id</th>
                                <th>Team</th>  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{appPlayer.name}</td>
                                    <td>{appPlayer.id}</td>
                                    <td>{appPlayer.team}</td>
                                </tr>
                            </tbody>

                            </table>
                        
                        </div>
                </div>

             </div>
    )
}


export default Get_Player_ById;





 -------------------------------------------------------------------------

Heaser.js

import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header sticky-top bg-white">
            <nav className="navbar navbar-fixed-top navbar-expand-lg">
                <div className="container-fluid" >
                    <Link to="/" className="navbar-brand align-left">
                        <img src="https://www.itdcindia.com/images/newsimages/62186d17bb18eIP.jpg" height="56px" alt="PwC" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                       
                            <li className="nav-item">
                                <Link to="/players" className="nav-link" >Add-Players</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link to="/search_player" className="nav-link" >Search-Player</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/delete_player" className="nav-link" >Delete-Player</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/update_player" className="nav-link" >Update-Player</Link>
                            </li>
                           
                           
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </header>
    );
}
export default Header;



-------------------------------------------------------------

PlayersData.js


import React from "react"
import { useState,useEffect } from "react"
import axios from "axios";
import Add_Player from "./Add_Player";
import Delete_Player from "./Delete_Player";


const PlayerData=()=>{

    const [playerId, setPlayerId] = useState();
    const [playerList,setPlayerList] =useState([])
    const [playerToAdd,setPlayerToAdd]=useState({})
    const [playerToUpdate,setPlayerToUpdate]=useState({})
    const [appPlayer,setAppPlayer]=useState({});
    const[deletePlayerId,setDeletePlayerId]=useState()
    const dataurl=`http://localhost:3000/players`


    useEffect(()=>{
        
    },[])
 
    const handleDeleteChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setDeletePlayerId(evt.target.value);
    }


    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setPlayerId(evt.target.value);
    }



    const handlePlayer = (evt) => {
        evt.preventDefault();
        setPlayerToAdd(
            {
                ...playerToAdd,
                [evt.target.name]: evt.target.value
            });
    }

    const handlePlayerupdate = (evt) => {
        evt.preventDefault();
        setPlayerToUpdate(
            {
                ...playerToUpdate,
                [evt.target.name]: evt.target.value
            });
    }


    const submitAddPlayer = (evt) => {
        evt.preventDefault();
        axios.post(dataurl, playerToAdd)
            .then((response) => {
                alert(`Player added successfully `);
            })
            .catch(() => {
                alert("Player could not be added.");
            });

        }


        const submitUpdatePlayer = (evt) => {
            evt.preventDefault();
            axios.put(`${dataurl}/${playerId}`)
                .then((response) => {
                    alert(`Player updated successfully `);
                })
                .catch(() => {
                    alert("Player could not be updated.");
                });
    
            }




            const submitGetPlayerById = (evt) => {
                evt.preventDefault();
                axios.get(`${dataurl}/${playerId}`)
                    .then((response) => {
                        console.log(response.data);
                        setAppPlayer(response.data);
                    })
                    .catch(() => {
                        alert("User not found.");
                        setPlayerId();
                    });
            }
    



  
    const getAllPlayers = (evt) => {
        evt.preventDefault();
        axios.get(`${dataurl}`)
            .then((response) => {
                console.log(response.data);
                setPlayerList(response.data);
            })
            .catch(() => {
                alert("Players not found.");
                setPlayerList([]);
            });
    }

    const submitDeletePlayerById=(evt)=>{
        evt.preventDefault();
        axios.delete(`${dataurl}/${deletePlayerId}`).
        then((response)=>{
            alert("Player Deleted..")
        })
        .catch((err)=>{
            console.log(err)
            alert("Player could not be Deleted..")
        })
    }


    return (
        <div className="container" >
            <p className="display-4 text-primary">Players Data Component</p>
            
        

            
            <div>

            <div>
           
          
              


    
        </div>

       <Delete_Player/>


            <div>
                <div className="col-6 border border-light shadow p-3 mb-5 bg-white">
                    <p>Update Player</p>
                    <form className="form form-group form-primary" onSubmit={submitUpdatePlayer}>
                        <input className="form-control mt-3" type="text" id="name" name="name" value={playerToUpdate.name} onChange={handlePlayerupdate} placeholder="Enter Name" />
                        <input className="form-control mt-3" type="number" id="id" name="id" value={playerToUpdate.id} onChange={handlePlayerupdate} placeholder="Enter Id" />
                        <input className="form-control mt-3" type="text" id="team" name="team" value={playerToUpdate.team} onChange={handlePlayerupdate} placeholder="Enter Team" />

                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Update Player" />
                    </form>
                </div>
            </div>

           
</div>



        


        
       
        
    );
}

export default PlayerData



----------------------------------------------------------------------------

Update_Players.js




import axios from "axios";
import { useEffect, useState } from "react";

const Update_Player =()=>{

    const [playerId,setPlayerId]=useState();
    const [playerToUpdate, setPlayerToUpdate] = useState({});
    const [player, setPlayer] = useState({});

    const dataUrl = `http://localhost:3000/players`;
    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setPlayerId(evt.target.value);
    };
    const submitGetPlayerById = (evt) => {
        evt.preventDefault();
        axios.get(`${dataUrl}/${playerId}`)
            .then((response) => {
                console.log(response.data);
                setPlayerToUpdate(response.data);
            })
            .catch(() => {
                alert("User not found.");
                
            });
    };


    const handleUpdatePlayer= (evt) => {
        evt.preventDefault();
        setPlayerToUpdate(
            {
                ...playerToUpdate,
                [evt.target.name]: evt.target.value
            });

            
    }

    const updateById=(evt)=>{
        evt.preventDefault();
        axios.put(`${dataUrl}/${playerId}`,playerToUpdate)
        .then((response)=>{alert("player updated")})
        .catch(()=>{alert("somethings wrong")
        });
    };
    return(
        <div>
             <p className="display-4 text-primary">Update Player</p>
            <div>
                <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                    <p>Update Player by id</p>
                    <form className="form form-group form-primary" onSubmit={submitGetPlayerById}>
                        <input className="form-control mt-3" type="number" id="userId" name="id" value={playerId} onChange={handleChange} placeholder="Enter playerId to search" />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find player" />
                    </form>
                    <form className="form form-group form-primary" onSubmit={updateById}>
                    <input className="form-control mt-3" type="text" id="name" name="name" value={playerToUpdate.name} onChange={handleUpdatePlayer} placeholder="Player name" />
                    <input className="form-control mt-3" type="text" id="team" name="team" value={playerToUpdate.team} onChange={handleUpdatePlayer} placeholder="Player team" />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Update player" />
                    </form>


                    {/* <p className="text-dark"> <span className="font-weight-bold"> App User Data: </span><br />  {appUser.id} <br />{appUser.name} <br />{appUser.username} <br />{appUser.email} <br />{appUser.phone}</p> */}
                    
                </div>
            </div>

        </div>
    )
     

}

export default Update_Player;



-----------------------------------------------------------

index.html


<!DOCTYPE html>
<html lang="en">

<head>
  <title>PwC React App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
</head>

<body>
  <div id="root"></div>

  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"></script>

</body>

</html>



-----------------------------------------------------------


Pakage.json


{
  "name": "pwc-react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "@reduxjs/toolkit": "^1.6.2",
    "redux": "^4.1.2",
    "react-redux": "^7.2.6",
    "axios": "^0.26.1",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router": "^5.2.1",
    "react-router-dom": "^5.3.0",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "jest-watch-typeahead": "^0.6.5"
  }
}














------------------------------------------------------------------------------------------------------------------------------------------------------------
