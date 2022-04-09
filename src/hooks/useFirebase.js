import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from "../firebase.inite";

const auth = getAuth(app);
const googelProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const singInWithGoogle = () => {
        signInWithPopup(auth, googelProvider)
            .then(result => {
                const user = result.user
                setUser(user);
                console.log(user);
            })
    };

    const handleSingOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return {
        user,
        handleSingOut,
        singInWithGoogle
    };
};
export default useFirebase;