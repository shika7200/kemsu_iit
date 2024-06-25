
import { HomeContentProvider } from '@/providers/HomeContentProvider/HomeContentProvider';
import { HomePage } from '@/widgets';


const Home: React.FC = () => (
  <HomeContentProvider>
    <HomePage />
  </HomeContentProvider>
);

export default Home;