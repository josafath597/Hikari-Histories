import {
  collection,
  limit,
  orderBy,
  startAfter,
  type QueryDocumentSnapshot,
  query,
  getDocs,
} from "firebase/firestore";
import { FirebaseDB } from "../firebase/firebaseConfig";
import { Anime, AnimeQueryResult } from "../interfaces/Anime";

export const getAnimes = async ({
  lastDocument = null,
}: {
  lastDocument: QueryDocumentSnapshot | null;
}): Promise<AnimeQueryResult> => {
  const Animes: Anime[] = [];
  const coll = collection(FirebaseDB, "animes");

  let firebaseQuery = query(coll, orderBy("nombre", "desc"), limit(12));

  if (lastDocument != null) {
    firebaseQuery = query(firebaseQuery, startAfter(lastDocument));
  }

  const querySnapshot = await getDocs(firebaseQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    Animes.push({ ...(doc.data() as Anime), uid: doc.id });
  });
  return { Animes, lastVisible };
};
