import { useState } from "react";
import { auth, db, storage } from "../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Profile = () => {
  const user = auth.currentUser;
  const [name, setName] = useState(user?.displayName || "");
  const [profilePic, setProfilePic] = useState(null);

  const handleUpdate = async () => {
    try {
      let photoURL = user.photoURL;

      if (profilePic) {
        const storageRef = ref(storage, `profiles/${user.uid}`);
        await uploadBytes(storageRef, profilePic);
        photoURL = await getDownloadURL(storageRef);
      }

      await updateProfile(user, { displayName: name, photoURL });

      await setDoc(doc(db, "users", user.uid), {
        name,
        photoURL,
      });

      alert("Profile updated!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="file" onChange={(e) => setProfilePic(e.target.files[0])} />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default Profile;
