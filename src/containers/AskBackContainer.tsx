import styled from '@emotion/styled';
import Card from '../components/common/Card';

const AskBackContainerBlock = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AskBackContainer = () => {
  return (
    <AskBackContainerBlock>
      <Card>
        <div>hello</div>
      </Card>
      <Card>
        <div>world</div>
      </Card>
    </AskBackContainerBlock>
  );
};

export default AskBackContainer;
