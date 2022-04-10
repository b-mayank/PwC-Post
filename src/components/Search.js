import { Link } from "react-router-dom";

import axios from 'axios'

import { useState, useEffect } from 'react'


const Search = () => {


    const [appPostList, setAppPostList] = useState([])
    const [id, setId] = useState([])

    useEffect(() => {
        



    }, [])
    const dataUrl = "https://jsonplaceholder.typicode.com/posts"




    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setId(evt.target.value);
    }

   






   

    // const submitGetAllAppPosts = () => {

    //     axios.get(`${dataUrl}`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setAppPostList(response.data);
    //         })
    //         .catch(() => {
    //             alert("Posts not found.");
    //             setAppPostList([]);
    //         });
    // }










    const submitGetPostById = (evt) => {
        evt.preventDefault();
        axios.get(`${dataUrl}/${id}`)
            .then((response) => {
                console.log(response.data);
                setAppPostList(response.data);
            })
            .catch(() => {
                alert("Posts not found.");
                setId([]);
            });
    }



    return (
        <div className="container col-lg-6  conn">




            <div>
                <div className="col-8 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find Post by id</p>
                    <form className="form form-group form-primary" onSubmit={submitGetPostById}>
                        <input className="form-control mt-3" type="number" id="id" name="id" value={id} onChange={handleChange} placeholder="Enter id to search" />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Post" />
                    </form>
                    {/* <p className="text-dark"> <span className="font-weight-bold"> App User Data: </span><br />  {appUser.id} <br />{appUser.name} <br />{appUser.username} <br />{appUser.email} <br />{appUser.phone}</p> */}
                    <div><span className="font-weight-bold"> Post Data: </span><br /> {JSON.stringify(appPostList)}</div>
                </div>
            </div>


        </div>
        
        
    );











   








          
}

export default Search;



