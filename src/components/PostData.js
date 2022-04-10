import axios from 'axios'


import { useState, useEffect } from 'react'





const PostData = () => {


    const [appPostList, setAppPostList] = useState([])
    const [id, setId] = useState([])

    useEffect(() => {
        submitGetAllAppPosts();



    }, [])
    const dataUrl = "https://jsonplaceholder.typicode.com/posts"

    const submitGetAllAppPosts = () => {

        axios.get(`${dataUrl}`)
            .then((response) => {
                console.log(response.data);
                setAppPostList(response.data);
            })
            .catch(() => {
                alert("Posts not found.");
                setAppPostList([]);
            });
    }


    return (
        <div className="container col-lg-6  conn">

            <div className="pt-5 pb-5 " >
                <p className="display-4 text-dark mb-10">Posts</p></div>
            <div className="">
                {appPostList.map((post) => {
                    return (

                        <div className="container">
                            {/* <div className="mb-5">
                                <h3 className>.{post.id} {post.title}</h3>

                              
                            </div>
                            <div className="mb-5">
                                <p className="post_body">{JSON.stringify(post.body)}</p>
                            </div> */}

                            <table>
                                <tr>
                                    <td><h3 className="mb-5">{post.id}</h3></td>
                                    <td><h3 className>{post.title}</h3></td>


                                </tr>
                                <tr>
                                    <td></td>
                                    <td colSpan=""><p className="post_body">{JSON.stringify(post.body)}</p></td>
                                </tr>
                            </table>
                        </div>


                    )
                })}



            </div>
        </div>
    )
}

export default PostData;