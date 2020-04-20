import React from 'react'
import footerStyles from './Footer.module.css'


const Footer = () => (
<footer>
    <div className={footerStyles.footer}>
        <div className={footerStyles.copyright}>©</div>
        <span className="tex-muted">Coderality LLC</span>
    </div>
</footer>
);

export default Footer;