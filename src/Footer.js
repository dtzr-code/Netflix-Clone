import React from 'react'
import {
  FooterContainer,
  FooterWrapper,
  FooterContact,
  FooterLink,
  FooterColumns,
  Column,
  ColumnLink,
  DropDownWrapper,
  DropDownOption,
  DropDownSelect,
  FooterTag,
  LinkWrapper,
} from './FooterStyles'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <LinkWrapper>
            <FooterContact> Questions? Call <FooterLink to='/'> 800 852 6334 </FooterLink> </FooterContact>

            <FooterColumns>
              <Column>
                <ColumnLink to='/'>FAQ</ColumnLink>
                <ColumnLink to='/'>Investor Relations</ColumnLink>
                <ColumnLink to='/'>Privacy</ColumnLink>
                <ColumnLink to='/'>Speed Test</ColumnLink>
              </Column>
              <Column>
                <ColumnLink to='/'>Help Centre</ColumnLink>
                <ColumnLink to='/'>Jobs</ColumnLink>
                <ColumnLink to='/'>Cookie Preference</ColumnLink>
                <ColumnLink to='/'>Legal Notices</ColumnLink>
              </Column>
              <Column>
                <ColumnLink to='/'>Account</ColumnLink>
                <ColumnLink to='/'>Ways to Watch</ColumnLink>
                <ColumnLink to='/'>Corporate Information</ColumnLink>
                <ColumnLink to='/'>Netflix Originals</ColumnLink>
              </Column>
              <Column>
                <ColumnLink to='/'>Media Centre</ColumnLink>
                <ColumnLink to='/'>Terms of Use</ColumnLink>
                <ColumnLink to='/'>Contact Us</ColumnLink>
              </Column>
            </FooterColumns>
          </LinkWrapper>
          
          <DropDownWrapper>
            <DropDownSelect placeholder='English'>
              <DropDownOption value = 'selected' hidden> Choose Your Language </DropDownOption>
              <DropDownOption>English</DropDownOption>
              <DropDownOption>Chinese</DropDownOption>
            </DropDownSelect>
          </DropDownWrapper>

          <FooterTag>
            Netflix Singapoe
          </FooterTag>

        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer
