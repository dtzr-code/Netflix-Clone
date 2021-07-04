import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const FooterContainer = styled.div `
  background-color: black;
  color: #595959;
  width: 100%;
`

export const FooterWrapper = styled.div `
  display: grid;
  flex-direction: column;
  text-align: left;
  margin-left: 250px;

  @media only screen and (min-width: 1500px){
    margin-left: 0;
    justify-content: center;

  }
`
export const LinkWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 15px;
`

export const FooterContact = styled.p `
  font-size: 18px;
  font-weight: normal;
  padding: 20px;

  @media only screen and (min-width: 1500px){
    font-size: 36px;
  }
`

export const FooterLink = styled(LinkS) `
  text-decoration: none;
  font-size: 18px;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media only screen and (min-width: 1500px){
    font-size: 36px;
  }
`

export const FooterColumns = styled.div `
  display: flex;
  flex-direction: row
  justify-content: center;
  align-items: center;
`

export const Column = styled.div `
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 60px;
`

export const ColumnLink = styled(LinkS) `
  text-decoration: none;
  font-size: 13px;
  padding: 5px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media only screen and (min-width: 1500px){
    font-size: 25px;
  }
`

export const DropDownWrapper = styled.div`
  margin-left: 20px;
  padding: 0 20px 20px 20px;
  align-items: center;
  justify-content: center;
`

export const DropDownSelect = styled.select `
  padding: 10px 12px 12px 10px;
  cursor: pointer;
  background-color: transparent;
  outline: white;
  color: white;
  font-size: 1rem;

  @media only screen and (min-width: 1500px){
    font-size: 25px;
  }
`

export const DropDownOption = styled.option `
  color: black;
  cursor: pointer;
`

export const FooterTag = styled.p `
  font-size: 0.8rem;
  margin-bottom: 5px;
  margin-left: 20px;
  padding-left: 20px;

  @media only screen and (min-width: 1500px){
    font-size: 20px;
  }
`