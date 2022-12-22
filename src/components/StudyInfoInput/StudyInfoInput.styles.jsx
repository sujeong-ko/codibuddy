import tw from 'tailwind-styled-components';

const Label = tw.label`
mr-2
max-md:block
max-md:my-3
`;

const InlineBlockBox = tw.div`
inline-block
`;

const WidthHalfWrap = tw(InlineBlockBox)`
w-1/2 
mr-5
max-md:w-full
`;

const Select = tw.select`
w-60
border
border-solid
border-inherit
p-1
rounded
max-md:w-full
`;

const DateInput = tw.input`
w-60
border
border-solid
border-inherit
p-1
rounded
max-md:block
max-md:w-full
`;

export { Label, InlineBlockBox, WidthHalfWrap, Select, DateInput };
