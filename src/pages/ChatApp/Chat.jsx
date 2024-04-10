import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useEffect, useState } from 'react';

const auth = firebase.auth();

function ChatApp() {
    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUser(user);
            } else {
                setUser(null);
            }

            if(initializing){
                setInitializing(false);
            } 
        });

        return unsubscribe;
    }, []);

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();

        try{
            await auth.signInWithPopup(provider);
        }catch(error){
            console.log(error);
        }
    };

    const signOut = async () => {
        try{
            await firebase.auth().signout();
        } catch (error) {
            console.log(error.message);
        }
    };

    if(initializing) return "Loading...";

    return (
        <div className="">
            {user ? (
                <>
                <Button onClick={signout}> Sign Out</Button>

                "Welcome to the chat"
                </>
            ) : (
                <Button onClick = { signInWithGoogle}>Sign In With Google</Button>
            )

            }
        </div>
    )
}