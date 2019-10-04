import React from 'react';
import styled from 'styled-components';


const LectureCard = (props) => {
    const { title, number, gradient, children } = props;

    let backgroundGradient;
    let buttonGradient;

    // Choosing card gradient based on passed prop
    switch (gradient) {
        case 'greenToYellow': 
            backgroundGradient = `linear-gradient(to right,#09d3ac 0%,rgb(240, 220, 79) 100%);`
            buttonGradient = `linear-gradient(140deg, #d0fff6, rgb(255, 248, 202));`
            break;
        default: 
            backgroundGradient = `linear-gradient(to right, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);`
            buttonGradient = `#fff;`
    }

    const Container = styled.div`
        width: 90%;
        margin: auto;
        // height: 100%;
        height: 250px;
        border-radius: 10px;
        float: left;
        position: relative;
        top: 0;
        z-index: 1;
        box-shadow: 0 5px 10px 0px #E3E3E3;
        -webkit-transition: all 0.4s ease;
        -moz-transition: all 0.4s ease;
        -ms-transition: all 0.4s ease;
        -o-transition: all 0.4s ease;
        transition: all 0.4s ease;
        background: ${backgroundGradient}

        &:hover div:nth-child(2) {
            opacity: .5;
        }

        &:hover div:nth-child(3) {
            opacity: .3;
        }
    `

    const Button = styled.a`
        text-decoration: none;
        color: #3C385C;
        font-weight: 800;
        font-size: 0.7rem;
        background: ${buttonGradient}
        width: 170px;
        line-height: 40px;
        display: block;
        border-radius: 30px;
        position: absolute;
        bottom: 20px;
        left: 0; right: 0;
        margin: 0 auto;
        text-align: center;
        cursor: pointer;
        transition: all 0.4s ease;
        
        & span {
            opacity: 0.6;
        }
        
        &:hover span {
            opacity: 1;
        }
    `

    const Title = styled.div`
        color: #FFF;
        font-size: 1.2rem;
        text-align: center;
        margin-top: 15px;

        // &::after{
        //     content: '';
        //     display: block;
        //     height: 3.5px;
        //     width: 13px;
        //     background-color: #FFF;
        //     border-radius: 15px;
        //     margin: 5px auto 0 auto;
        // }
    `
    const Number = styled.div`
        position: absolute;
        top: 48%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0; right: 0;
        text-align: center;
        font-size: 11rem;
        color: #FFFFFF;
        opacity: 0.2;
        font-weight: 800;
        -webkit-transition: all 0.4s ease;
        -moz-transition: all 0.4s ease;
        -ms-transition: all 0.4s ease;
        -o-transition: all 0.4s ease;
        transition: all 0.4s ease;

        // &::before{
        //     content: '£';
        //     font-size: 2rem;
        //     position: absolute;
        //     top: 40px;
        //     left: 40px;
        // }
    `
    const TextContainer = styled.div`
        position: absolute;
        top: 52%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0; right: 0;
        text-align: center;
        color: #FFFFFF;
        -webkit-transition: all 0.4s ease;
        -moz-transition: all 0.4s ease;
        -ms-transition: all 0.4s ease;
        -o-transition: all 0.4s ease;
        transition: all 0.4s ease;

        & div:nth-child(1) {
            width: 70%;
            margin: auto;
            font-size: 0.9rem;
        }

        & div:nth-child(2) {
            font-size: 2.5rem;
        }
    `


    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Number>{number}</Number>
            <TextContainer>
                <div>{children}</div>
                
            </TextContainer>
            <Button>
                <span>Подробнее</span>
            </Button>
        </Container>

    );
}

export default LectureCard;
