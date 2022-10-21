import { useState } from 'react';
export const useAddTest = () => {
    const [error, setError] = useState(null);
    const [addedStatus, setAddedStatus] = useState(true);

    const AddTest = async (name, category, duration, description, nbQuestion,
        scoreReq, _id, access, disponibility, questions) => {

        const user = JSON.parse(localStorage.getItem('user'));
        let trainerID = user._id;
        let trainerName = user.firstName + " " + user.lastName;
        console.log('trainerID : ', trainerName);
        const test = {
            _id, name, category, duration, description, nbQuestion,
            scoreReq, trainerID, trainerName, access, disponibility, questions
        };

        const response = await fetch('/api/tests/', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(test)
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setAddedStatus(false);
        }
        if (response.ok) {
            setError(null);
            console.log(" inside of useAddTest : ", test);
            setAddedStatus(true);
        }
    }
    return { AddTest, error, addedStatus, setAddedStatus }
}