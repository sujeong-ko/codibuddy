import React from 'react';
import tw from 'tailwind-styled-components';

export const PositionSelect = React.forwardRef(
  ({ onChange, name, label }, ref) => (
    <WidthHalfWrap>
      <Label>{label}</Label>
      <Select name={name} ref={ref} onChange={onChange}>
        <option value='frontend'>프론트엔드</option>
        <option value='backend'>백엔드</option>
        <option value='fullstack'>풀스택</option>
      </Select>
    </WidthHalfWrap>
  ),
);

export const HeadcountSelect = React.forwardRef(
  ({ onChange, name, label }, ref) => (
    <InlineBlockBox>
      <Label>{label}</Label>
      <Select name={name} ref={ref} onChange={onChange}>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10명 이상</option>
      </Select>
    </InlineBlockBox>
  ),
);

export const PlaceSelect = React.forwardRef(
  ({ onChange, name, label }, ref) => (
    <WidthHalfWrap>
      <Label>{label}</Label>
      <Select name={name} ref={ref} onChange={onChange}>
        <option value='online'>온라인</option>
        <option value='offline'>오프라인</option>
      </Select>
    </WidthHalfWrap>
  ),
);

export const DateSelect = React.forwardRef(({ onChange, name, label }, ref) => (
  <InlineBlockBox>
    <Label>{label}</Label>
    <DateInput type='date' name={name} ref={ref} onChange={onChange} />
  </InlineBlockBox>
));

export const DurationSelect = React.forwardRef(
  ({ onChange, name, label }, ref) => (
    <WidthHalfWrap>
      <Label>{label}</Label>
      <Select name={name} ref={ref} onChange={onChange}>
        <option value='1'>1개월</option>
        <option value='2'>2개월</option>
        <option value='3'>3개월</option>
        <option value='4'>4개월</option>
        <option value='5'>5개월</option>
        <option value='6'>6개월</option>
      </Select>
    </WidthHalfWrap>
  ),
);

export const DepositSelect = React.forwardRef(
  ({ onChange, name, label }, ref) => (
    <InlineBlockBox>
      <Label>{label}</Label>
      <Select name={name} ref={ref} onChange={onChange}>
        <option value='1000'>1000원</option>
        <option value='3000'>3000원</option>
        <option value='5000'>5000원</option>
      </Select>
    </InlineBlockBox>
  ),
);

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

DateSelect.displayName = 'DateSelect';
DepositSelect.displayName = 'DepositSelect';
DurationSelect.displayName = 'DurationSelect';
HeadcountSelect.displayName = 'HeadcountSelect';
PlaceSelect.displayName = 'PlaceSelect';
PositionSelect.displayName = 'PositionSelect';
