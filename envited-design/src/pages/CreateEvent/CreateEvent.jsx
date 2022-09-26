import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import EventInput from '../../components/EventInput';

const CreateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const CancelButton = styled.button`
  padding: 20px;
  border: none;
  background: none;
  font-size: 18px;
  color: 	#888888;
  cursor: pointer;
`;


function CreateEvent() {
  const navigate = useNavigate();
  
  return (
    <CreateWrapper>
      <HeaderContainer>
        <CancelButton onClick={() => navigate('/')}>Cancel</CancelButton>
      </HeaderContainer>
      <EventInput />
    </CreateWrapper>
  )
};
export default CreateEvent;