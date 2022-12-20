import tw from 'tailwind-styled-components';

const Label = tw.label`
mr-2
`;

const InlineBlockBox = tw.div`
inline-block
`;

const WidthHalfWrap = tw(InlineBlockBox)`
w-1/2 
mr-5
`;

const Select = tw.select`
w-60
border
border-solid
border-inherit
p-1
rounded
`;

const DateInput = tw.input`
w-60
border
border-solid
border-inherit
p-1
rounded
`;

export { Label, InlineBlockBox, WidthHalfWrap, Select, DateInput };
