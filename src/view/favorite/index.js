import { getStorage, ref } from "firebase/storage";

const Favorite = () => {

  const storage = getStorage();
  const pathReference = ref(storage, 'brur9dO4rDVPxzVWSYa1Cy9ZMTm.jpeg');
  const gsReference = ref(storage, 'gs://host-and-go.appspot.com/Images/lebaramines.jpeg');
  const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/host-and-go.appspot.com/o/Images%2Flebaramines.jpeg?alt=media&token=71fa8289-5fad-4d0e-879a-d1035b57411d');  

    return (
        <div>
            Favorite
        </div>
    );
};

export default Favorite;