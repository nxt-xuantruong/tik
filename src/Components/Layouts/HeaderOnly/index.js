import Header from '~/Components/Layouts/Components/Header';

function DefaultLayout({ Children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{Children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
