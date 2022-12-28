import { createSlice } from '@reduxjs/toolkit';

export const studySlice = createSlice({
  name: 'study',
  initialState: {
    tempStudyInfo: {
      title: '',
      start_at: '',
      limit_head_count: 0,
      is_oline: true,
      contents: '',
      end_at: 0,
      position: '',
      price: 0,
    },
    tempStudyTag: [],
  },
  reducers: {
    tempSetStudy: (state, action) => {
      state.tempStudyInfo = { ...action.payload.studyInfo };
      state.tempStudyTag = [...action.payload.studyTag];
    },
  },
});

export default studySlice.reducer;
export const { tempSetStudy } = studySlice.actions;
