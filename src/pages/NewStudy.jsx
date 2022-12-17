// import React from 'react';
// import styled from 'styled-components';
// import tw from 'tailwind-styled-components';
// import { useForm } from 'react-hook-form';
// import Button from './../components/Button';
// import {
//   DateSelect,
//   DepositSelect,
//   DurationSelect,
//   HeadcountSelect,
//   PositionSelect,
//   PlaceSelect,
// } from './../components/StudyInfoInput';

// const languages = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'React',
//   'Vue',
//   'Svelt',
//   'Nodejs',
//   'Nextjs',
//   'Java',
//   'Spring',
//   'Go',
//   'Nestjs',
//   'Kotlin',
//   'Express',
//   'MySQL',
//   'MongoDB',
//   'Python',
//   'Django',
//   'php',
//   'GraphQL',
//   'Firebase',
//   'Flutter',
//   'Swift',
//   'ReactNative',
//   'Unity',
//   'AWS',
//   'Kubernetes',
//   'Docker',
//   'Git',
//   'Figma',
//   'Zeplin',
//   'Jest',
// ];

// const NewStudy = () => {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);
//   const CancleSubmit = () => alert('작성을 취소하시겠습니까?');

//   const CategorySelect = () => {
//     const CategoryInput = ({ language }) => (
//       <div className='inline-block mr-1'>
//         <label>
//           <input
//             className='m-2'
//             {...register('language')}
//             type='checkbox'
//             value={language}
//           />
//           {language}
//         </label>
//       </div>
//     );

//     return (
//       <>
//         <p className='my-2'>기술 스택</p>
//         <div className='border border-solid border-inherit px-1 py-3 rounded'>
//           {languages.map((item, idx) => {
//             return <CategoryInput key={idx} language={item} />;
//           })}
//         </div>
//       </>
//     );
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Discription>1. 스터디 기본 정보를 입력해주세요.</Discription>
//         <FormWrap>
//           <InputWrap>
//             <PositionSelect label='포지션' {...register('position')} />
//             <HeadcountSelect label='최대 인원' {...register('headcount')} />
//           </InputWrap>
//           <InputWrap>
//             <PlaceSelect label='진행 방식' {...register('place')} />
//             <DateSelect label='시작일' {...register('startDate')} />
//           </InputWrap>
//           <InputWrap>
//             <DurationSelect label='진행 기간' {...register('duration')} />
//             <DepositSelect label='예치금' {...register('deposit')} />
//           </InputWrap>
//           <div>
//             <CategorySelect />
//           </div>
//         </FormWrap>
//         <Discription>2. 스터디에 대해 설명해주세요.</Discription>
//         <FormWrap>
//           <TitleInput
//             name='title'
//             id='title'
//             placeholder='제목을 적어주세요.'
//             {...register('title')}
//           />
//           <div>
//             <ContentInput
//               placeholder='내용을 적어주세요.'
//               {...register('content')}
//             />
//           </div>
//         </FormWrap>
//         <div className='flex justify-end'>
//           <Button type='basic' text='작성취소' onClick={CancleSubmit} />
//           <Button type='submit' text='등록하기' />
//         </div>
//       </form>
//     </>
//   );
// };

// export default NewStudy;

// // <div class="relative">
// // <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
// const Discription = tw.div`
// font-bold
// text-lg
// my-5
// `;

// const FormWrap = tw.div`
// flex-col
// w-full
// `;

// const InputWrap = tw.div`
//   flex
//   my-2
// `;

// const TitleInput = tw.input`
// w-full
// border
// border-solid
// border-inherit
// p-2
// rounded
// mb-4
// `;

// const ContentInput = tw.textarea`
// w-full
// h-80
// min-h-fit
// border
// border-solid
// border-inherit
// p-2
// rounded
// resize-none
// `;
