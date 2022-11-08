import { GoogleAuthProvider,getAuth,updateProfile,signInWithPopup,onAuthStateChanged, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useState, useEffect } from 'react'
import FirebaseInit from "../Components/Login/Firebase/FirebaseInit";


FirebaseInit()
const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [errors, setErrors] = useState('')
    const [isLoading, setIsLoading] = useState(true)
   // const [token, setIdToken] = useState('')

    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)

            .then((result) => {

                const user = result.user;
                console.log(user)
                setUsers(user)
            }).then(error => {
                setErrors(error.message)
            })
            .finally(() => setIsLoading(false));




    }


    const signUp=(name,email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    setUsers(user)
    updateProfile(auth.currentUser, {
      displayName: name,
  }).then(() => {

  }).catch((error) => {
      console.log(error)
  });
  })
  .catch((error) => {
   console.log(error.message)
  });
    }

    const signIn=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error.message)
  });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
            
              setUsers(user)
            } else {
              setUsers({})
            }
          });
    },[])




    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, (user) => {
    //         if (user) {

    //             // getIdToken(user)
    //             //     .then(idToken => {
    //             //         localStorage.setItem("idToken", idToken)

    //             //         console.log(idToken)
    //             //         setIdToken(idToken)
    //             //     })
    //             setUsers(user)

    //         } else {
    //             setUsers({})
    //         }
    //         setIsLoading(false)
    //     });
    //     return () => unsubscribed;
    // }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {


        }).then(error => {
            setErrors(error.message)
        })
            .finally(() => setIsLoading(false));

    }


    return {
        users,
        //errors,
        logOut,
        //isLoading,
       // token,
        signInUsingGoogle,
        signIn,
        signUp
    }

}

export default useFirebase;














































// import { useState, useEffect } from 'react';
// import { getAuth, getIdToken, createUserWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// import FirebaseInit from "../Components/Login/Firebase/FirebaseInit";

// FirebaseInit()

// const useFirebase = () => {

//     const [user, setUser] = useState({})
//     const [isLoading, setIsLoading] = useState(true)
//     //const [authError, setAuthError] = useState('')
//     const [admin, setAdmin] = useState(false)
//     //const [token, setToken] = useState('')

//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     const signInWithGoogle = (location, history) => {
//       //  setIsLoading(true)
//         signInWithPopup(auth, provider)
//   .then((result) => {
    
//     //const token = credential.accessToken;
    
//     const user = result.user;
//     const destination = location?.state?.from || "/";
//              history.replace(destination)

//     setUser(user);
//   }).catch((error) => {
//     alert(error.message)
//     console.log(error)
//   });
//         // signInWithPopup(auth, provider)
//         //     .then((result) => {

//         //         const user = result.user;
//         //         setUser(user)
//         //        // saveUser(user.email, user.displayName, 'PUT')
//         //         const destination = location?.state?.from || "/";
//         //         history.replace(destination)
//         //        // setAuthError('')

//         //     }).catch((error) => {
//         //        // setAuthError(error.message)
//         //        alert(error.message)
//         //     }).finally(() => setIsLoading(true));


//     }

//     const registerUser = (name, email, password, history) => {
//         //console.log(name)
//         setIsLoading(true)
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {

//                 const user = userCredential.user;
//                 setUser(user);
//                 //setAuthError('')
//                 const newUser = { email, displayName: name };
//                 setUser(newUser)
//                 //saveUser(email, name, 'POST')
//                 updateProfile(auth.currentUser, {
//                     displayName: name,
//                 }).then(() => {

//                 }).catch((error) => {
//                     console.log(error)
//                 });
//                 history.replace('/')

//             })
//             .catch((error) => {
//                // setAuthError(error.message)
//                 alert(error.message)
//             }).finally(() => setIsLoading(false));

//     }

//     const logOut = () => {
//         setIsLoading(true)
//         signOut(auth).then(() => {

//         }).catch((error) => {

//         }).finally(() => setIsLoading(false));

//     }

//     const logInUser = (email, password, location, history) => {
//         setIsLoading(true)
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {

//                 const user = userCredential.user;
//                 const destination = location?.state?.from || "/";
//                 history.replace(destination)
//                 setUser(user)
//                 console.log(user)
//                 //setAuthError('')

//             })
//             .catch((error) => {
//                // setAuthError(error.message)
//                alert(error.message)
//             })
//             .finally(() => setIsLoading(false));
//     }
//     //observer user state
//     useEffect(() => {
//         const unsubsribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user)

//                // getIdToken(user)
//                    // .then(idToken => {
//                      //   console.log(idToken)
//                        // setToken(idToken)
                    

//             } else {
//                 setUser({})
//             }
//             setIsLoading(false)
//         });
//         return () => unsubsribe
//     }, [])

//     useEffect(() => {

//         fetch(`http://localhost:5000/users/${user.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setAdmin(data.admin)
//             })

//     }, [user.email])

//     // const saveUser = (email, displayName, method) => {

//     //     const user = { email, displayName };
//     //     fetch('http://localhost:5000/users', {
//     //         method: method,
//     //         headers: { 'content-type': 'application/json' },
//     //         body: JSON.stringify(user)
//     //     })
//     //         .then(res => res.json())
//     //         .then(data => {
//     //             console.log(data)
//     //         })

//     // }

//     return {
//         user,
//         registerUser,
//         admin,
//         logOut,
//         logInUser,
//         isLoading,
//        // authError,
       
//         signInWithGoogle

//     }


// }


// export default useFirebase;