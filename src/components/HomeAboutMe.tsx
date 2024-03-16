//import { useState } from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function HomeAboutMe() {

    return (
        <div>
            <h1 style={{ color: 'red', fontSize: 80, fontFamily: 'initial' }}>Welcome,</h1>
            <p style={{ color: 'white', fontSize: 15, fontFamily: 'initial', paddingLeft: 15 }}> Hello, I am Ming, a computer engineering student from Thailand </p>
            <p style={{ color: 'white', fontSize: 13, fontFamily: 'initial', paddingLeft: 15 }}> I'm studying at Chulalongkorn University and I'm interested in Web Development and Game Development </p>
            <div style={{ paddingLeft: 10 }}>
                <span style={{ paddingLeft: 5 }}><a href='https://github.com/MingPV'><GitHubIcon color='info' /></a></span>
                <span style={{ paddingLeft: 5 }}><a href='https://www.linkedin.com/in/pavee-jeungtanasirikul-9395362ba/'><LinkedInIcon color='info' /></a></span>
                <span style={{ paddingLeft: 5 }}><a href='https://www.facebook.com/profile.php?id=100009174193658'><FacebookIcon color='info' /></a></span>
                <span style={{ paddingLeft: 5 }}><a href='https://www.instagram.com/i.muming?igsh=a3A4eDN1amtlaWhp&utm_source=qr'><InstagramIcon color='info' /></a></span>
            </div>
        </div>
    )
}

export default HomeAboutMe;
