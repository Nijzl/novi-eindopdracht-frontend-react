import "../styles/Footer.css"

function Footer() {

    const year = new Date().getFullYear();

    return <footer className="page-footer">© Placeholder, {year} </footer>;
}

export default Footer;