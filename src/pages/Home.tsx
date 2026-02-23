import Options from '../components/Options.tsx';

interface HomeProps {
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Home({ setCartItems }: HomeProps) {
  return (
    <div className="page">
        <Options setCartItems={setCartItems} />
    </div>
  );
}