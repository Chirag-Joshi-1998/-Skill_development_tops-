import { useState } from "react";
import { storage, db, auth } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const PostImage = () => {
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    if (!image) return;

    const storageRef = ref(storage, `posts/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, "posts"), {
      imageUrl: url,
      userId: auth.currentUser.uid,
      likes: [],
      createdAt: serverTimestamp(),
    });

    alert("Image posted!");
  };

  return (
    <div>
      <h2>Post an Image</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default PostImage;
