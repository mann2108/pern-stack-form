import React, { Fragment, useEffect, useState } from 'react';
import {Table} from 'reactstrap';


const DisplayComponent = () => {
    
    const [userData, setUserData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/user",{
                method : "GET",
                headers : {"content-type" : "application/json"},
            });
            const jsonData = await response.json();
            setUserData(jsonData); 
        }
        catch(err) {
            
        }
    }

    useEffect(()=> {
        fetchData();
    },[]);
    
    console.log(userData);

    return(
        <Fragment>
            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>DOB</th>
                        <th>Bio</th>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                {userData.map(userData => (
                    <tr>
                        <td>{userData.uid}</td>
                        <td>{userData.firstname}</td>
                        <td>{userData.lastname}</td>
                        <td>{userData.email}</td>
                        <td>{userData.phoneno}</td>
                        <td>{userData.dob}</td>
                        <td>{userData.bio}</td>
                        <td>{userData.securityque}</td>
                        <td>{userData.answer}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Fragment>    
    );
}
export default DisplayComponent;