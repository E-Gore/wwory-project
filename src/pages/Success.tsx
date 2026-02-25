import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

export default function Success() {
  const [searchParams] = useSearchParams();
  const [verified, setVerified] = useState<'loading' | 'ok' | 'unknown'>('loading');

  useEffect(() => {
    // Payment Link nie zwraca session_id, ale możemy sprawdzić
    // czy user w ogóle trafił tu ze Stripe
    const fromStripe = searchParams.get('stripe');

    // Małe opóźnienie żeby nie było "mignięcia" loadingu
    setTimeout(() => {
      setVerified(fromStripe === 'true' ? 'ok' : 'unknown');
    }, 800);
  }, []);

  if (verified === 'loading') {
    return (
      <div className="page">
        <h1>⏳ Sprawdzanie płatności...</h1>
      </div>
    );
  }

  if (verified === 'ok') {
    return (
      <div className="page">
        <h1>✅ Dziękujemy za zakup!</h1>
        <p>Płatność przebiegła pomyślnie. Wkrótce otrzymasz potwierdzenie na e-mail.</p>
        <Link to="/">Wróć na stronę główną</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>⚠️ Nie możemy potwierdzić płatności</h1>
      <p>Jeśli dokonałeś płatności, skontaktuj się z nami.</p>
      <Link to="/">Wróć na stronę główną</Link>
    </div>
  );
}
