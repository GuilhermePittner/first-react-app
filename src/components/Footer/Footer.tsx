import './Footer.css'

const Footer = () => {
    return (
        <section className='footer_section'>

            <div className='footer_social'>
                <img className='footer_icon' src='/imagens/fb.png' alt='facebook_icon' />
                <img className='footer_icon' src='/imagens/tw.png' alt='twitter_icon' />
                <img className='footer_icon' src='/imagens/ig.png' alt='instagram_icon' />
            </div>

            <img className='footer_image' src='/imagens/logo.png' alt='logo' />

            <p>Desenvolvido por <a href='https://www.alura.com.br/' target='_blank'>Alura</a> ft: <a href='https://github.com/GuilhermePittner' target='_blank'>xUoT1</a>.</p>

        </section>
    );
}

export default Footer
