import React, { useEffect, useState } from "react";
import Add from "../img/add-photo.png";
import backgr from "../img/background.jpg";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { async } from "@firebase/util";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
// import { login } from "../pages/Login";
export const Register = () => {
  const [err, seterr] = useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault()
    //console.log(e.target[0].value);
    const dname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // chèn từ link firebase nhớ xóa getAuth
    //import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    //const auth = getAuth();
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      /*.then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });*/

      //const storage = getStorage();
      const storageRef = ref(storage, dname);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
      /*  (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, */
        (error) => {
          // Handle unsuccessful uploads
          seterr(true);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
           // console.log('File available at', downloadURL);
            await updateProfile(res.user,{dname, photoURL: downloadURL});
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              dname,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      
    }
    catch(err){
        seterr(true);
    }
  }

  return (
    <div
      className="formContainer"
      style={{
        background: `url(${backgr})`,
        backgroundPosition: "center",
        backgroundSize: "1600px",
      }}
    >
      <div className="formWrapper">
        <span className="logo">Goszip</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err &&<span>Please retry (longer password maybe?)</span>}
        </form>
        {/*<span>Already have an account ?</span> <Link to="/login">Login</Link>*/}
      </div>
    </div>
  );
};
