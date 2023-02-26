import './footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p  href="https://www.linkedin.com/in/andr%C3%A9s-di-bonaventura-35b54a1b0/?originalSubdomain=es" className='footer__text'>&copy; Andres Di Bonaventura</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="https://www.instagram.com/abefastt/" className="redes__links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <p className='abe'>A+BE Fast English Academy</p>
      </ul>
    </footer>
  );
};

export default FooterScreen;
