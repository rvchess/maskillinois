import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl, ContentWithPaddingLg } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/2 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet The Team.",
  subheading = "Our Team",
  description = "Members of I-Made 2020 at the University of Illinois Urbana-Champaign",
  cards = [
    {
      imageSrc: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/46654521_2194481987474277_917261571107848192_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=QsilfjBuqpIAX98DRjn&_nc_ht=scontent-sjc3-1.xx&oh=215076f02b231cdca5ff80085a12fb13&oe=5F740E6E",
      position: "Co-Founder",
      name: "Ruben Verghese",
      links: [
        {
          url: "https://www.facebook.com/profile.php?id=100007374919187",
          icon: FacebookIcon,
        },
        {
          url: "https://www.linkedin.com/in/ruben-verghese/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/rvchess",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/qs0ciIpFx8Zu5v0Pio0kcfhWALv_3TXqIQOxB0-MJ4pnFbnANCiFdqUlb1Wuhj_CyNeTgjRCA4izOANZqBrKFnxYaYnkLHXaPGJuRSKuBI0oWU31vtVU_i0gkKiNHzdlIkqIJt9H",
      position: "Co-Founder",
      name: "Ritesh Reddy",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://lh6.googleusercontent.com/y3MyXCwX9P0YVQzJT6TLGflNnhM0ojxDNTosCdwzHpVUIa4vuEO7wFLBD9c3VUCB6IdVO_LGCSPyVxudAfLG9LBHIVT8p5lda3mN3LqtjV3UcGuQ6FiSnHOYBUqfPALmiqmADViS",
      position: "Developer",
      name: "Aishwarya Rajesh",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://ca.slack-edge.com/TSYA0GFUH-U013Y52RGHZ-gb4c7fb35993-512",
      position: "Developer",
      name: "Armaan Mehta",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/71HKEJWbsFtx7w7tIhWZ5FevXY8r9R_nRV1zkml1dqr1cE90xEGAFW7ZIuliy6_IO1oUyDsZTZ1j-n5bScNyKWMZCFKV3JZoMuvgHFCNGDdYDOaRkpsJWwuCLdgU9aTUkEnuL-eM",
      position: "Media",
      name: "Aryan Shah",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/15697546_122825244883116_854941790588692330_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=HtMB0MMF224AX_lT9An&_nc_ht=scontent-sjc3-1.xx&oh=750a7305b8daf5dceee98b5faa4023e4&oe=5F76EF51",
      position: "Media",
      name: "Avyn Alairys",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingLg>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url} target="_blank">
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingLg>
    </Container>
  );
};
