import tw from 'tailwind-styled-components';

const UpdatePage = tw.div`
mt-7
ml-auto
mr-auto
mb-auto
w-2/3
h
`;

const ProfileHead = tw.div`
border-b-4
w-full
sticky
flex
gap-2
pb-5
`;

const ProfileImage = tw.img`
w-10
h-10
mr-3
`;

const ProfileName = tw.div`
mt-2
`;

const ProfileDetail = tw.form`
w-5/6
mt-5
ml-auto
mr-auto
mb-auto
`;

const Input = tw.input`
placeholder-shown:bg-slate-50
rounded-sm
w-full
h-12
border-1
border-[#e5e5e5]
pt-1
pb-1
pl-1
mb-3
outline-0
box-border
`;

const TitleText = tw.div`
mt-2
text-sm
text-black
leading-loose
`;

const SaveBtn = tw.button`
block
h-3/7
w-2/5
text-base
pt-2
pb-2
cursor-pointer
bg-[#52b4d0]
text-white
leading-loose
mt-5
ml-auto
mr-auto
mb-auto
rounded-sm
border-none
`;

export {
  UpdatePage,
  ProfileDetail,
  ProfileHead,
  ProfileImage,
  ProfileName,
  Input,
  TitleText,
  SaveBtn,
};
