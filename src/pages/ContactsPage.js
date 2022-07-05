import ContactList from '../components/ContactList';
import PageTitle from '../components/PageTitle';

const HomePage = () => {
  return (
    <div>
      <PageTitle title="Contacts" />
      <ContactList />
    </div>
  );
};

export default HomePage;
