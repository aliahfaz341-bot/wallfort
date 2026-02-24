import React from 'react'
import Button from './Button'
import axios from 'axios'

const SendButton = ({ name, phone }) => {
    const handleSend = async () => {
        try {
            const res = await axios.post("https://example.com/api/send", {
                name: name,
                phone: phone
            });
            console.log("Response:", res.data);
        } catch (error) {
            console.log('Error', error)
        }
    }
    return (

        <div>
            <Button className='w-60' text={'Send'}
                onClick={handleSend}
            />
        </div>
    )
}

export default SendButton
