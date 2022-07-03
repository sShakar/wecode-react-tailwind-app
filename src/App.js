import PageTitle from './components/PageTitle';
import ContactList from './components/ContactList';
import './index.css';

const App = () => {
  return (
    <div className="bg-gray-900  mx-auto flex flex-col items-center justify-center min-h-screen">
      <PageTitle title="Favorite Contacts" />
      <ContactList />
    </div>
  );
};

export default App;
