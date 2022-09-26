import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from "lodash";
import { setItem, updateItem, getItem} from '../../utils/localStorage';
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContent = styled.div`
  max-width: 600px;
  flex: 1;
  @media (max-width: 1024px) {
    max-width: 400px;
  }
`;
const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Imagelabel = styled.div`
  cursor: pointer;
  height: 400px;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
	display: flex;
  flex-direction: column;
  color: white;
  font-size: 30px;
  font-weight: bold;
  background: url(https://www.envited.io/_ipx/w_1920,q_75/https%3A%2F%2Fd23sdgsd7v5sge.cloudfront.net%2FParty.png?url=https%3A%2F%2Fd23sdgsd7v5sge.cloudfront.net%2FParty.png&w=1920&q=75);
  background-size: cover;
  @media (max-width: 1024px) {
    height: 250px;
    width: 250px;
  }
`;

const ImageText = styled.span`
  padding-top: 250px;
  @media (max-width: 768px) {
    padding-top: 130px;
  
}
`;

const Formlabel = styled.div`
  padding: 15px;
  align-items: flex-start;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  background-color: #F5F5F5;
  height: 40px;
  border: none;
  width: 100%;
`;

const EventWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
  
`;

const ButtonWrapper = styled.div`
  align-self: center;
  padding: 35px;

`;

const SubmitButton = styled.button`
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  background: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
  border: none;
  height: 40px;
  width: 350px;
  cursor: pointer;
`;

const FormItemMessage = styled.label`
  align-self: center;
  color: red;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadBtn = styled.button`
  border-radius: 10px;
  border: none;
  margin: 20px;
  width: 150px;
  color: white;
  background: linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%);
  
`;
function EventInput() {
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState(false);
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [urlLink, setUrlLink] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const formData = {
    eventName,
    hostName,
    startDate,
    endDate,
    streetName,
    city,
    postCode,
    urlLink,
    selectedImage
  }
	useEffect(() => {
		if (
			isEmpty(eventName) &&
			isEmpty(hostName) &&
			isEmpty(startDate) &&
			isEmpty(endDate) &&
			isEmpty(streetName) &&
			isEmpty(city) &&
      isEmpty(postCode)
		)
			return;
      updateItem("eventInfo", formData);
	}, [
		eventName,
    hostName,
    startDate,
    endDate,
    streetName,
    city,
    postCode,
    urlLink,
    selectedImage
	]);


  useEffect(() => {
    if (!isEmpty(location.search) && !isEmpty(getItem("eventInfo"))) {
      const eventData = getItem("eventInfo")
      setEventName(eventData.eventName);
      setHostName(eventData.hostName);
      setStartDate(eventData.startDate);
      setEndDate(eventData.endDate);
      setStreetName(eventData.streetName);
      setCity(eventData.city);
      setPostCode(eventData.postCode);
      setUrlLink(eventData.urlLink);
      setSelectedImage(eventData.selectedImage);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      isEmpty(eventName) || 
      isEmpty(hostName) ||
      isEmpty(startDate) ||
      isEmpty(endDate) || 
      isEmpty(streetName) ||
      isEmpty(city) || 
      isEmpty(postCode)
      ) {
      setError(true);
    }else{
      setItem("eventInfo", formData);
      navigate("/event")
    };     
  };

  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "free"
  });
 
  return (
    <Container>
      
      <EventWrapper>  
        <FormContent> 
          {
            !isEmpty(location.search)?
            <h1>Edit your event</h1> :
            <h1>Create your event</h1>
          }
          <Formlabel>
            🎉 Event Name:
            <Input
              type="text"
              name="eventName"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
              required
            />
            {error && isEmpty(eventName) && <FormItemMessage>Event name can not be empty!</FormItemMessage>}
          </Formlabel>
          <Formlabel>
            💁 Host Name:
            <Input
              type="text"
              name="hostName"
              value={hostName}
              onChange={e => setHostName(e.target.value)}
              required
            />
            {error && isEmpty(hostName) && <FormItemMessage>Host name can not be empty!</FormItemMessage>}
          </Formlabel>
          <Formlabel>
            🗓 Start Date:
            <Input
              type="datetime-local"
              name="startDate"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              required
          />
          {error && isEmpty(startDate) && <FormItemMessage>Start date can not be empty!</FormItemMessage>}
          </Formlabel>
          <Formlabel>
            🏁 End Date:
            <Input
              type="datetime-local"
              name="endDate"
              min={startDate}
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
            />
            {error && isEmpty(endDate) && <FormItemMessage>End date can not be empty!</FormItemMessage>}      
          </Formlabel>
          <Formlabel>
            📍 Street name:
            <Input
              type="text"
              name="streetName"
              value={streetName}
              onChange={e => setStreetName(e.target.value)}
              required
            />
            {error && isEmpty(streetName) && <FormItemMessage>Street name can not be empty!</FormItemMessage>}      
          </Formlabel>
          <Row>
          <Formlabel>
            🪢 City:
            <Input
              type="text"
              name="city"
              value={city}
              onChange={e => setCity(e.target.value)}
              required
            />
            {error && isEmpty(city) && <FormItemMessage>City can not be empty!</FormItemMessage>}      
          </Formlabel>
          <Formlabel>
            🕸 Post code:
            <Input
              type="text"
              name="postCode"
              value={postCode}
              onChange={e => setPostCode(e.target.value)}
              required
            />
            {error && isEmpty(postCode) && <FormItemMessage>Post code can not be empty!</FormItemMessage>}      
          </Formlabel>
          </Row>
          <Formlabel>
            🔗 Add a URL link(optional)
            <Input
              type="text"
              name="urlLink"
              value={urlLink}
              placeholder="eg. https://www."
              onChange={e => setUrlLink(e.target.value)}
            />
          </Formlabel>
        </FormContent>
        <ImageContent>
          <UploadButton uploader={uploader}
            options={{multi: false}}
            onComplete={files => setSelectedImage(files[0].fileUrl)}>
            {({onClick}) => 
              isEmpty(selectedImage) ? 
              <Imagelabel onClick={onClick}>
                <ImageText>Choose a photo</ImageText>
              </Imagelabel> 
              :
              <UploadWrapper>
                <img src={selectedImage}/>
                <UploadBtn onClick={()=> setSelectedImage(null)}>
                  <ImageText>Remove the photo</ImageText>
                </UploadBtn>
              </UploadWrapper>
            }  
          </UploadButton>
    
        </ImageContent>
      </EventWrapper>
      <ButtonWrapper>
          <SubmitButton type='submit' onClick={handleSubmit} role="submit-btn">
            {
              !isEmpty(location.search)? "Save your edit" :
              "Create your event"
            }
            
          </SubmitButton>
      </ButtonWrapper>
      
    </Container>
  )
}

export default EventInput;