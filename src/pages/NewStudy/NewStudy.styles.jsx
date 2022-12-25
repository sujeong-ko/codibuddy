import tw from 'tailwind-styled-components';

const Description = tw.div`
font-bold
text-lg
my-5
`;

const FormWrap = tw.div`
flex-col
w-full
`;

const InputWrap = tw.div`
  flex
  my-2
  max-md:flex-col
`;

const TitleInput = tw.input`
w-full
border
border-solid
border-inherit
p-2
rounded
`;

const ContentInput = tw.textarea`
w-full
h-80
min-h-fit
border
border-solid
border-inherit
p-2
mt-4
rounded
resize-none
`;

const ErrorMessageSpan = tw.span`
text-sm
text-red-500
`;

export {
  Description,
  FormWrap,
  InputWrap,
  TitleInput,
  ContentInput,
  ErrorMessageSpan,
};
