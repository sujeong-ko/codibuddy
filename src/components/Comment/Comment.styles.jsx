import tw from 'tailwind-styled-components';

const CommentWrap = tw.form`
my-10
`;

const CommentInput = tw.input`
w-full
border
border-solid
border-gray-500
p-4
rounded
mr-4
my-6
`;

const CommentAuthor = tw.span`
block
my-4
font-bold
`;

const CommentContent = tw(CommentAuthor)`
font-normal
`;

const CommentButton = tw.button`
text-xs
text-gray-400
`;

export {
  CommentWrap,
  CommentInput,
  CommentAuthor,
  CommentContent,
  CommentButton,
};
