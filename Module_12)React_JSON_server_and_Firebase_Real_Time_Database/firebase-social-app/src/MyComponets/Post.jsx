import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const handleLike = async (postId, likes) => {
  const user = auth.currentUser;
  const postRef = doc(db, "posts", postId);

  if (likes.includes(user.uid)) {
    await updateDoc(postRef, { likes: arrayRemove(user.uid) });
  } else {
    await updateDoc(postRef, { likes: arrayUnion(user.uid) });
  }
};
