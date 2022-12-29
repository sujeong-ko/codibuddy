import tw from 'tailwind-styled-components';

const Wrap = tw.div`
flex
flex-row
justify-center
items-center
w-full
h-50
border-b
mb-4
`;
const ProfileMain = tw.div`
flex
space-x-4
`;
const UserInfo = tw.div`
flex
items-center
justify-center
text-xl
`;
const ProfileImg = tw.img`
w-[100px]
h-[100px]
rounded-xl
p-0.5
m-4
`;
const Icon = tw.div`
flex
items-center
gap-3
`;
const Contents = tw.div`
flex
`;
const SelfText = tw.div`
text-l
ml-3
p-2
flex
items-center
justify-center
`;
const Point = tw.div`
text-l
ml-3
p-2
flex
items-center
justify-center
`;
export {
  Wrap,
  ProfileMain,
  ProfileImg,
  UserInfo,
  Icon,
  SelfText,
  Point,
  Contents,
};
