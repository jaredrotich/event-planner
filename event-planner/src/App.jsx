import { useUser } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/global.css';

export default function App() {
  const { user } = useUser();

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          {user ? <AppRoutes /> : <div className="auth-prompt">Please log in to view events</div>}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}