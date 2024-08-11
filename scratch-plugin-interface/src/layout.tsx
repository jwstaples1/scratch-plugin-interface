import Navigation from './components/organisms/Navigation';
import Builder from './components/pages/Builder';
import PageTemplate from './components/templates/PageTemplate';

const Layout = () => {
    return (
        <PageTemplate
            components={{ page: <Builder />, navigation: <Navigation /> }}
        />
    );
};

export default Layout;
