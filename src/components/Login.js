import React from 'react';
import styled from 'styled-components';

function Login(){
    return(
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
};

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url("images/login-background.jpg") no-repeat fixed;
        content-fit: cover;
        background-position: top;
        z-index: -1;
        opacity: 0.7;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin: 8px 0 12px 0;
    &:hover{
        background: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`