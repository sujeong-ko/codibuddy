import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const PostButton = tw.button`
mr-4`;

const StudyTitleSection = styled.div`
  > div {
    margin: 40px 0;
  }
`;

const StudyInfoSection = tw.ul`
grid grid-cols-2 gap-y-4`;

const StudyInfoList = styled.li`
  span {
    &: first-child {
      margin-right: 40px;
    }
    &: last-child {
      font-weight: bold;
    }
  }
`;

const StudyContentSection = styled.div`
  > div {
    margin: 20px 0;
  }
`;

const DivisionLine = tw.div`
mt-6
mb-10
border-b-2
border-grey-200
`;

export {
  PostButton,
  StudyContentSection,
  StudyTitleSection,
  StudyInfoList,
  StudyInfoSection,
  DivisionLine,
};
