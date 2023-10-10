import Header from '~/Components/Layouts/Components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ Children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{Children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
