import './footer.css'

const Footer = () => (
    <footer id='footer' className="page-footer blue-grey darken-4 footer-content">
        <div className="footer-left">
            <div>Чётные дни: Илья Катухов</div>
            <div>Нечётные дни: Павел Воробьёв</div>
        </div>

        <div>DUTY © {new Date().getFullYear()}</div>
    </footer>
)

export default Footer
