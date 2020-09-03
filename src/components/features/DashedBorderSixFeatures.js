import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import {Container as ContainerBase } from "components/misc/Layouts.js"
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import {PrimaryButton} from "components/misc/Buttons.js"
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import defaultCardImage from "../../images/shield-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
// import surgicalmask from "../../imported/surgical_mask.png";
// import faceshield from "../../imported/face_shield.png";
// import fabricmask from "../../imported/fabric_mask.png";
import simple from "../../images/simple-icon.svg";
import isRgbColor from "validator/es/lib/isRgbColor";

//document.body.style.backgroundColor = "#15395D";
//const Container = tw.div`relative`;
const Container = tw(ContainerBase)`bg-blue-900 -mx-8`
//const Container = '#4A4E69'

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center mx-auto py-20 md:py-24`}
`;
//max-w-screen-xl
const Heading = tw(SectionHeading)`w-full items-center text-orange-500`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-white rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-black text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  });
});
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-orange-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-gray-200 text-sm leading-loose`}
  }
  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-orange-500 leading-none hocus:text-orange-400 transition duration-300`}
    
`;

const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg text-orange-500`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  cards = [
    {imageSrc: ShieldIconImage,
      title: "Surgical Masks",
      description: 
"This mask filters out large particles in the air by reducing exposure to the saliva and respiratory secretions of the mask wearer.",
      url: "https://www.youtube.com/watch?v=X0MRVPrePIg",
    },

    {imageSrc: simple,
      title: "Fabric Masks",
      description: "Similar to a surgical mask, a cloth mask helps reduce the spread of the virus. Masks can be made from common materials, such as sheets made of tightly woven cotton.",
      url: "https://www.youtube.com/watch?v=uRfhuRNua_E",
    },

    {imageSrc: ShieldIconImage,
      title: "Face Shields",
      description: "Face shields are commonly used by front-line health workers,  as an added layer of protection in addition to masks.",
      url: "https://www.youtube.com/watch?v=HHUrSX2cJyA",
    },

    {
      imageSrc: simple,
      title: "When to Wear a Mask?",
      description: "Short Answer: ALWAYS when you're stepping out of the house to reduce risk of catching the virus by 65%!",
      url: "",
    },

    { imageSrc: ShieldIconImage, 
    title: "How to Wear a mask?",
    description: "Wash your hands before putting on your face covering. Put it over your nose and mouth & secure it under your chin. Make sure you can breathe easily.",
    url: "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/how-to-wear-cloth-face-coverings.html",
    }
  ],
  linkText = "Learn More",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null
}) => {

  return (
    <Container>
      <Heading><span tw="text-gray-500">Tutorials</span></Heading>
      <ThreeColumnContainer>
        {cards.map((cards, i) => (
          <Column key={i}>
            <Card/*href= {cards.url}*/ >
            <span className="imageContainer"> 
                <img src={cards.imageSrc || defaultCardImage} alt="" /></span>
                <span className="title">{cards.title || "Fully Secure"}</span>
                <p className="description"> {cards.description}</p>
                <PrimaryLink onClick={()=> window.open( cards.url, "_blank")}>
                {linkText} <ArrowRightIcon />
              </PrimaryLink>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};