import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
     const [ user, setUser ] = useState({});
     const [ isLoading, setIsLoading ] = useState(true);
     const [ authError, setAuthError ] = useState('');
     const [ admin, setAdmin ] = useState(false);

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     //Registation User
     const registerUser = (email, password, name, history) => {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
               setAuthError('');
               const newUser = { email, displayName: name };
               setUser(newUser);
               //save user to database 
               saveUser(email, name, 'POST');
               //send user to firebase
                    updateProfile(auth.currentUser, {
                         displayName: name
                    }).then(() => {
                         // Profile updated!
                    }).catch((error) => {
                         // An error occurred
                    });
               history.replace('/');
             })
             .catch((error) => {
               setAuthError(error.message);
             })
             .finally(() => setIsLoading(false));
     }

     //Login User
     const loginUser = (email, password, location, history) => {
          setIsLoading(true);
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                    setAuthError('');
               })
               .catch((error) => {
                    setAuthError(error.message);
               })
               .finally(() => setIsLoading(false));
     }

     //SignInWith Google 
     const signInWithGoogle = (location, history) => {
          setIsLoading(true);
          signInWithPopup(auth, googleProvider)
               .then((result) => {
                    const user = result.user;
                    saveUser(user.email, user.displayName, 'PUT');
                    setAuthError('');
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
               }).catch((error) => {
                    setAuthError(error.message);
               })
               .finally(() => setIsLoading(false));
     }

     //Observe hare
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user);
               } else {
                    setUser({});
               }
               setIsLoading(false);
             });
             return () => unsubscribed;
     },[]);

     //Second useEffect
     useEffect(() => {
          fetch(`https://agile-oasis-71318.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
     },[user.email]);

     //Log out hare
     const logOut = () => {
          setIsLoading(true);
          signOut(auth).then(() => {
               
             }).catch((error) => {
               
             })
             .finally(() => setIsLoading(false));
     }

     //Save user to database
     const saveUser = (email, displayName, method) => {
          const user = { email, displayName };
          fetch('https://agile-oasis-71318.herokuapp.com/users', {
               method: method,
               headers: {
                    'content-type':'application/json'
               },
               body: JSON.stringify(user)
          })
          .then()
     }

     //Return hare
     return {
          user,
          isLoading,
          authError,
          admin,
          signInWithGoogle,
          registerUser,
          logOut,
          loginUser
     }
}

export default useFirebase;