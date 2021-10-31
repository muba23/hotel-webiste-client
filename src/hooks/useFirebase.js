import { useEffect, useState } from "react"
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init'

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        // setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logout = () =>{
        setIsLoading(true);
        signOut(auth)
            .then(result =>{
                setUser({});
            })
            .finally(()=>setIsLoading(false));
            
    }

    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    }, []);

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logout
    } 

}

export default useFirebase;