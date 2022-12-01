import './footer.css'

const Footer = () => (
    <footer id='footer' className="page-footer blue-grey darken-4 footer-content">
        <div className="footer-left">
            <div>Чётные дни: Виктор Давтян</div>
            <div>Нечётные дни: Иван Супрун</div>
        </div>

        <div>DUTY © {new Date().getFullYear()}</div>
    </footer>
)

export default Footer
