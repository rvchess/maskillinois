import React, {Component} from "react"
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl, ContentWithPaddingLg } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import axios from "axios";
import ReactLoading from 'react-loading';


const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-12 h-12 bg-contain bg-center rounded`}
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

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.heading = "Meet The Team."
        this.subheading = "Our Team" 
        this.description = "Select one of our generous donors and contact them via email / phone number to request mask(s)"
        this.cards = [
            {
              imageSrc: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
              position: "Founder",
              name: '...',
            },
            {
              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
              position: "Sr. Designer",
              name: "Charlotte Hale",
            },
            {
              imageSrc: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
              position: "Jr. Designer",
              name: "Silvester Wize",
            },
            {
              imageSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
              position: "Lead Developer",
              name: "Himali Turn",
            },
            {
              imageSrc: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
              position: "Sr. Developer",
              name: "Troye Sivan",
            },
            {
              imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
              position: "Quality Assurance",
              name: "Holo Wo",
            },
        ]
        
        this.state = {
            all_users: []
        }
    }

    componentDidMount = () => {
        axios.get('/get-data').then(response => {
            const public_users = []
            for(var i=0; i<response.data.length; i++) {
                if(response.data[i].profile_visibility === 'Public' && response.data[i].verified === 0) public_users.push(response.data[i])
            }
            this.setState({all_users: public_users})
        })
    }

    render() {
        return (
            <Container>
              <ContentWithPaddingLg>
                <HeadingContainer>
                  <Heading>User Profiles</Heading>
                  <Description>{this.description}</Description>
                </HeadingContainer>
                {this.state.all_users.length === 0 
                ?
                <center> <ReactLoading type={'spinningBubbles'} color={'light blue'} height={70} width={120} /> </center>
                :
                <Cards>
                  {this.state.all_users.map((card, index) => (
                    <Card key={index}>
                      <CardImage imageSrc={card.profile_picture} />
                      <CardContent>
                        <span className="position"> {card.first_name} {card.last_name}</span>
                        <span className="name"> {card.email} </span>
                        <span className="name"> {card.user_location} </span>
                        <span className="name"> Masks available: {card.number_masks} </span>
                        <span className="name"> Type of masks: {card.type_masks} </span>
                        <span className="name"> Preferred exchange: {card.preferred_exchange} </span>
                      </CardContent>
                    </Card>
                  ))}
                </Cards>
                }
              </ContentWithPaddingLg>
            </Container>
          );
    }
    
}

export default UserProfile;