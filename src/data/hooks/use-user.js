import {useEffect, useState} from "react";
import { auth, provider } from "../Firebase";

function useUser() {

    const [userState, setUserState] = useState({
        user: auth.currentUser,
        isLoading: auth.currentUser === null ? true : false,
        error: null,
    });

    const { user, isLoading, error } = userState;
    const isSignedIn = user !== null;
    const userId = isSignedIn ? user.uid : undefined;

    useEffect(() => {
       const onChange = (currentUser) => {
           setUserState({ user: currentUser, isLoading: false, error: null });
       };
       const onError = (error) => {
           console.error(error);
           setUserState( { user: null, isLoading: false, error });
       };
       const unsubscribe =  auth.onAuthStateChanged(onChange, onError);

       return unsubscribe;
    }, []);

    const signIn = async () => {
        setUserState({ user: null, isLoading: true, error: null });
        try {
            const credentials = await auth.signInWithPopup(provider);
            setUserState({ user: credentials.user, isLoading: false, error: null });
        } catch (error) {
            console.error(error);
            setUserState({ user: null, isLoading: false, error });
        }
    };

    const signOut = async () => {
        setUserState({ user: userState.user, isLoading: true, error: null });
        try {
            await auth.signOut();
            setUserState({ user: null, isLoading: false, error: null });
        } catch (error) {
            console.error(error);
            setUserState({ user: userState.user, isLoading: false, error });
        }
    };

    return {
        user,
        userId,
        isLoading,
        isSignedIn,
        error,
        signIn,
        signOut,
    };
}

export default useUser;