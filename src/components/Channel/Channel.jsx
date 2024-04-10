import { FirebaseError } from 'firebase/app';
import { QuerySnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const Channel = ({ user= null, db = null}) => {
    const  [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const { uid, displayName, photoURL} = user;
    
    useEffect(() => {
        if(db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .limit(100)
                .onSnapshot(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        ... doc.data(),
                        id: doc.id,

                    }))
                    setMessages(data);
                })

            return unsubscribe;
        }
    }, [db]);

    const handleOnChange = e => {
        setNewMessage(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        if(db) {
            db.collection('messages').add({
                text: setNewMessage,
                createdAt: firebase.firestore.FindValue.serverTimestamp(),
                    uid,
                    displayName Cache.add(request: RequestInfo): Promise<void>
                    photoURL
                    )
            })
        }
    }

    return (
        <ul>
            {messages.map(message => (
                <li key={message.id}>{message.text}</li>
            ))}
        </ul>
    )
}