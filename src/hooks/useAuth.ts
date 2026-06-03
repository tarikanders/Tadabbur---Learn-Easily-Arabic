import { useState, useEffect } from 'react';
import { signInAnonymously, onAuthStateChanged, User, AuthError, signInWithPopup, GoogleAuthProvider, signOut, linkWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        setError(null);
      } else {
        signInAnonymously(auth).catch((err: AuthError) => {
          console.error("Auth error:", err);
          if (err.code === 'auth/admin-restricted-operation') {
            const msg = "L'authentification anonyme n'est pas activée. Veuillez l'activer dans la console Firebase (Authentication > Sign-in method > Anonymous). En attendant, l'application fonctionnera en mode hors-ligne avec la sauvegarde locale.";
            setError(msg);
            console.warn(msg);
          } else {
            setError(err.message);
          }
          setLoading(false);
        });
      }
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      if (auth.currentUser && auth.currentUser.isAnonymous) {
        try {
          await linkWithPopup(auth.currentUser, provider);
        } catch (linkErr: any) {
          if (linkErr.code === 'auth/credential-already-in-use') {
            // Un compte Google existe déjà. On se connecte directement (ce qui remplacera la session anonyme)
            await signInWithPopup(auth, provider);
          } else {
            throw linkErr;
          }
        }
      } else {
        await signInWithPopup(auth, provider);
      }
    } catch (err: any) {
      console.error("Google login error:", err);
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      console.error("Logout error:", err);
    }
  };

  return { user, loading, error, loginWithGoogle, logout };
}
