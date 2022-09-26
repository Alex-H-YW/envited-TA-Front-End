import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getItem } from '../../utils/localStorage';
import { isEmpty } from 'lodash';
import { FcLink } from "react-icons/fc";
import { FiChevronRight } from "react-icons/fi";
import cake from "../../assets/cake.png";
import location from "../../assets/Location.png";
import calender from "../../assets/Calender.png";
import { useNavigate } from 'react-router-dom';

const EventWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  padding-top: 70px;
  align-self: flex-start;
  width: 500px;
  height: 500px;
  overflow: hidden;
  @media (max-width: 1024px) {
    align-self:center;
  }
`;

const Image = styled.img`
	height: 100%;
  width: 100%;
	object-fit: cover;
	
`;

const EventContent = styled.div`

 
`;

const Title = styled.span`
  display: flex;
  align-items: flex-start;
  font-size: 48px;
  font-weight: bold;
  padding: 60px 0 0 60px;
  @media (max-width: 768px) {
    padding-top: 5px;
  }

`;
const SubTile = styled.span`
  padding: 0 0 60px 60px;
  color: #828282;
  font-size: 18px;
 
`;
const DetailContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  @media (min-width: 1024px) {
    padding: 20px 70px;
  }

`;
const IconWrapper = styled.div`
  height: 20px;
  width: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px #F2F3F4;
  svg {
    font-size: 25px;
  }
 
`;
const ShowWrapper = styled.div`
  flex: 1;
 
`;
const StartContent = styled.div`
  padding: 5px 10px;
`;

const EndContent = styled.div`
  padding: 5px 10px;
`;

const ArrowWrapper = styled.div`
  font-size: 35px;
  color: #A6ACAF;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  margin: 10px; 
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: white;
  background: linear-gradient(to right, #8456ec, #e87bf8);
`;

function Display() {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState();
  const handleRemove = () => {
    localStorage.clear();
    navigate('/create');

  }
  const handleEdit = () => {
    navigate({
      pathname:'/create',
      search: '?edit'
    });

  }

  useEffect(() => {
    if(!isEmpty(getItem("eventInfo")) ){
      setEventData(getItem("eventInfo"));   
    }
	}, []); 

  

  return (
    <EventWrapper>
      {
        !isEmpty(eventData) &&
        <>
          <EventContent>
            <Title>{eventData.eventName}</Title>
            <SubTile>Hosted by <strong>{eventData.hostName}</strong></SubTile>
            <DetailContent>
              <IconWrapper>
                <img src={calender} />
              </IconWrapper>
              <ShowWrapper>
                <StartContent><strong>Detail Time</strong></StartContent>
                <StartContent>{eventData.startDate}to {eventData.endDate}</StartContent>
                <EndContent>UTC + 10</EndContent>
              </ShowWrapper>
              <ArrowWrapper>
                <FiChevronRight />
              </ArrowWrapper>
            </DetailContent>

            <DetailContent>
              <IconWrapper>
              <img src={location} />
              </IconWrapper>
              <ShowWrapper>
                <StartContent><strong>Street Name</strong></StartContent>
                <EndContent>{eventData.streetName}, {eventData.city}, {eventData.postCode}</EndContent>
              </ShowWrapper>
              <ArrowWrapper>
                <FiChevronRight />
              </ArrowWrapper>
            </DetailContent>
            {
              isEmpty(eventData.urlLink)? 
              <DetailContent>
              <IconWrapper>
                <FcLink />
              </IconWrapper>
              <ShowWrapper>
                <StartContent><strong>Link</strong></StartContent>
                <EndContent>{eventData.urlLink ? eventData.urlLink : "empty"}</EndContent>
              </ShowWrapper>
              <ArrowWrapper>
                <FiChevronRight />
              </ArrowWrapper>
            </DetailContent> :
            <a href={eventData.urlLink} target="_blank" rel="noreferrer">
              <DetailContent>
              <IconWrapper>
                <FcLink />
              </IconWrapper>
              <ShowWrapper>
                <StartContent><strong>Link</strong></StartContent>
                <EndContent>{eventData.urlLink ? eventData.urlLink : "empty"}</EndContent>
              </ShowWrapper>
              <ArrowWrapper>
                <FiChevronRight />
              </ArrowWrapper>
              </DetailContent>
            </a>
              
            }
            <BtnWrapper>
              <Btn onClick={handleEdit}>Edit Event</Btn>
              <Btn onClick={handleRemove}>Remove Event</Btn>
              
            </BtnWrapper>
            </EventContent>
            <ImageWrapper>
              <Image id="img" src={eventData.selectedImage? eventData.selectedImage: cake} alt="event photo" />
            </ImageWrapper>
          </>
      
      }
      

    </EventWrapper>
  )
}

export default Display;