import "./Footer.css"

function Footer(){
    return (
        <footer className="Footer">
            <div className="Footer__content">
                <div>
                    <p className="Footer__kicker">Kuriosakabinettet</p>
                    <p className="Footer__text">Handplockat märkligt sedan alldeles nyss.</p>
                </div>
                <a className="Footer__link" href="mailto:hej@kuriosakabinettet.se">
                    Kontakta oss
                </a>
            </div>
            <p className="Footer__copyright">© 2026 Kuriosakabinettet</p>
        </footer>
    )
}

export default Footer