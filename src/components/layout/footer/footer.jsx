import './footer.css'

const Footer = () => {
    return(
        <footer className="page-footer blue-grey darken-4 pt0">
            <div className="footer-copyright">
                <div className="container footer__content">
                    <div className="footer__master">
                        <p className='footer__name'>
                            Чётные дни: Виктор Давтян
                        </p>
                        <p className='footer__name'>
                            Нечётные дни: Иван Супрун
                        </p>
                    </div>

                    DUTY © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
};

export default Footer;