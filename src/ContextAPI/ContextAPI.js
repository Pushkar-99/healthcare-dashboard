import { useState } from 'react';
import Context from './Context';

const ContextAPI = (props) => {
    const username = "coalition";
    const password = "skills-test";
    let auth = btoa(`${username}:${password}`);
    const [result, setResult] = useState({});
    const getAllPatientInfo = async () =>
    {
        try
        {
            const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev' , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${auth}`
                }
            });

            if(!response.ok)
            {
               console.log(`An error occurred : ${response.status}`);
            }
    
            const json = await response.json();

            setResult(json);
            
        }
        catch(error)
        {
            console.error('Error fetching the data', error);
        }
    }
    return (
        <Context.Provider value={{getAllPatientInfo, result}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextAPI
