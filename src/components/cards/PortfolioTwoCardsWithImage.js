import React, { Component } from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import colors from "tailwind.config.js"
import "tailwindcss/dist/base.css"
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
// import map from "../../imported/map.jpg";
// import help from "../../imported/help.jpg";
// import howTo from "../../imported/howTo.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-blue-900 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg text-orange-500`}
  svg {
    ${tw`ml-2 w-5 h-5 text-blue-900`}
  }
`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;

const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center text-primary-500`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg text-orange-500`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0 text-orange-500`} 
  svg {
    ${tw`w-5 h-10 mr-1 text-blue-900`}
  }
`;

const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = "",
  headingHtmlComponent = (
    <>
      {/* How Can <span tw="text-orange-500">You </span>Help? */}
    </>
  ),
  description = (
    <>
      - Donate Masks<p>- Provide Blood (Plasma if you've recovered from COVID-19)</p><p>- Contribute to relief organizations</p><p>- Write letters to senior citizens (Penpal programs)</p><p>- Volunteer for organizations providing critical services</p>
    </>
  ),
  linkText = "Learn More",
  cardLinkText = "Read More",
  textOnLeft = false
}) => {
  const image = [
    {
      // imageSrc: howTo,
    }
  ];

  const cards = [
    {
       imageSrc: "https://cdn.cnn.com/cnnnext/dam/assets/200403174736-20200403-coronavirus-how-to-help-v2-exlarge-169.jpg",
      company: "Recent Spike In Cases",
      title: "Not using masks have led to cases increasing exponentially in the last few weeks.",
      durationText: "07/20/2020",
      locationText: "United States",
      url: "https://www.cnn.com/interactive/2020/health/coronavirus-how-to-help/",
    },
    {
       imageSrc: "https://www.actionagainsthunger.org/sites/default/files/styles/story_horizontal_small/public/images/stories/EU_mBQHXQAAy8u5.jpg?itok=Jfq12zN_",
      company: "Helping the Global Community",
      title: "Countries and non-profits around the world are currently accepting donations.",
      durationText: "Current",
      locationText: "Sudan",
      url: "https://www.actionagainsthunger.org/story/how-help-covid-19-relief",
    }
  ];

  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
                            <Subheading>{subheading}</Subheading>
              <HeadingDescription>{description}</HeadingDescription>
              <PrimaryLink onClick={()=> window.open('https://www.google.com/', "_blank")}>
              {linkText} <ArrowRightIcon />
              </PrimaryLink>
              <Image imageSrc={image.imageSrc} />
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card href={card.url}>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                    <CardAction onClick={()=> window.open(card.url, "_blank")}>Read More</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
