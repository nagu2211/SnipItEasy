'use client';
import { useParams } from 'next/navigation';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import app from '../../../firebaseConfig';

export default function shortIdPage() {
  app;
  const params = useParams();
  const shortId = params.shortId;
  async function goLink(shortId: string | string[]): Promise<void> {
    try {
      const db = getFirestore();
      const linksCollectionRef = collection(db, 'link');
      const q = query(linksCollectionRef, where('shortUrl', '==', shortId));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const linkData = doc.data();
          if (typeof window !== 'undefined') {
            window.location.href = linkData.url;
          }
        });
      } else {
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  goLink(shortId);

  return <p>Redirigiendo...</p>;
}
