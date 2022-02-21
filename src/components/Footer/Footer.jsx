import './Footer.css'

export default () => {
    return (
        <div className="footer">
            <div className="footer--icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>

            <div className="footer--lists">
                <ul className='footer--list1'> 
                    <li>Idioma e legendas</li>
                    <li>Impresa</li>
                    <li>Privacidade</li>
                    <li>Entre em contato</li>
                </ul>

                <ul className="footer-list2">
                    <li>audidescrição</li>
                    <li>Relação com investidores</li>
                    <li>Avisos</li>
                </ul>

                <ul className="footer-list3">
                    <li>Centro de ajuda</li>
                    <li>Carreiras</li>
                    <li>Preferências</li>
                </ul>

                <ul className="footer-list4">
                    <li>Cartão pré-pago</li>
                    <li>Termos de uso</li>
                    <li>Informações corporativas</li> 
                </ul>
            </div>

            <div className="footer--info">
                <span>Direitos de imagens para Netflix</span>
                <span>Dados pego do site <a href="https://www.themoviedb.org/">Themoviedb.org</a></span>

            </div>

        </div>
    )
}