import styled from 'styled-components'
import { media } from '../theme/media'

export const WeatherContainer = styled.div`
border: 1px solid #787878;
border-radius: 5px;
-webkit-box-shadow: 5px 5px 5px 0px #787878; 
box-shadow: 5px 5px 5px 0px #787878;
`

export const MainContainer = styled.div`
    color: white;
    padding: 5px 25px;
    display: flex;
    background: linear-gradient(#0069b0, #1e9fe8);

    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

  ${media.greaterThan('sm')`
    /* your CSS code for sm breakpoint */
 `};

  ${media.greaterThan('md')`

    font-size: 40px;
 `};
`

export const MainContainerBlock = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`

export const SubContainer = styled.div`
    background-color: white;
    color: black;
    text-align: center;
    position: relative;
    padding: 5px;

    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    display: flex;
    flex-wrap: wrap;
`

export const SubContainerBlock = styled.div`
    flex: 50%;
    color: #666;
    font-weight: 500;
    margin-bottom: 15px;

    ${media.greaterThan('lg')`
        flex: 25%;
    `};
`

export const DateSub = styled.p`
    font-weight: bold;
    color: #333;
`

export const DescSub = styled.p`
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const City = styled.p`
    font-size: 25px;

    ${media.greaterThan('sm')`
        font-size: 40px;
    `};
`

export const NowDate = styled.p`
    font-size: 16px;
`

export const Temperature = styled.p`
    font-size: 35px;

    ${media.greaterThan('lg')`
        font-size: 50px;
    `};
`

export const MainDesc = styled.small`
    display: block;
    line-height: 1.5;

    ${media.greaterThan('md')`
    font-size: 16px;
`};
`
