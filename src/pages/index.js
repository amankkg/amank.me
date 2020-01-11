import React from 'react'
import {styled} from 'linaria/react'

import {Metatags} from '../components'

const IndexPage = () => (
  <>
    <Metatags
      description="Aman Kubanychbek personal website"
      keywords={[
        'aman kubanychbek',
        'аман кубанычбек',
        'аман кубанычбек уулу',
        'amank.me',
        'amankkg',
        'bishkek',
        'бишкек',
        'kyrgyzstan',
        'кыргызстан',
        'software engineer',
        'программист',
      ]}
    />
    <ImageBackground>
      <Background>
        <TextArea>
          <FirstName>Aman</FirstName>
          <LastName>Kubanychbek</LastName>
          <SubText>Software Engineer from Bishkek, Kyrgyzstan</SubText>
          <br />
          <SubText>
            <Link href="https://t.me/amankkg" target="_blank">
              Telegram
            </Link>
            &nbsp;
            <Link href="https://twitter.com/amankkg" target="_blank">
              Twitter
            </Link>
            &nbsp;
            <Link href="https://github.com/amankkg" target="_blank">
              GitHub
            </Link>
            &nbsp;
            <Link
              href="https://linkedin.com/in/amankubanychbek/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </SubText>
          <SubText>
            <Link href="mailto:amankubanychbek@gmail.com">
              amankubanychbek@gmail.com
            </Link>
          </SubText>
        </TextArea>
      </Background>
    </ImageBackground>
  </>
)

export default IndexPage

const ImageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
    url(../../content/background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  scroll-behavior: none;
`

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  filter: none;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 2vh 0 5vh 5vw;
`

const FirstName = styled.span`
  font-size: 30vw;
  padding: 10px;
  padding-bottom: 0px;

  @media screen and (min-width: 1200px) {
    font-size: 20vw;
  }
`

const LastName = styled.span`
  font-size: 14vw;
  padding: 10px;
  padding-top: 0px;

  @media screen and (min-width: 1200px) {
    font-size: 9vw;
  }
`

const SubText = styled.span`
  font-size: 4vw;
  padding: 10px;

  @media screen and (min-width: 1200px) {
    font-size: 2.6vw;
  }
`

const Link = styled.a`
  color: white;
`
