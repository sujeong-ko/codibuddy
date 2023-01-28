# 💻 CODIBUDDY(코디버디)

<h3 align="center">📣 개발자들을 위한 스터디 구하기 웹 서비스, CODIBUDDY!</h3>

<div  align="center">
  <img width="40%" alt="image" src="https://user-images.githubusercontent.com/65716445/209968016-296f3cb0-0dd3-42a8-8239-8616f7a47b5d.png">
</div>
</br>

# 📍프로젝트 소개

- **팀 명 :** C5DBUDDY(코5디버디)
- **프로젝트 명 :** CODIBUDDY(코디버디)
- **프로젝트 기간 :** 2022.12.12 - 2022.12.30
- **노션 :** [CODIBUDDY 노션 링크](https://sujeongko.notion.site/2-5e3c4fefd6524d8fbf96c394f9ade828)
- **시연 영상 :** [🤝CODIBUDDY 시연 영상](https://youtu.be/fc29irO9Qb8)

## **❣️CODIBUDDY란?**

> 💻 코디버디는 `코딩(Coding)` `버디(Buddy)`를 구한다는 의미로, 함께 프로젝트와 스터디를 해나갈 개발자 동료들을 구할 수 있는 웹서비스입니다.

- 💘 원하는 포지션, 기술스택을 선택할 수 있습니다!
- ✍️ 의욕을 불태우기 위해 스터디 참여 전 보증금을 결제하고 스터디를 성공적으로 마치면 보증금을 돌려받습니다!

- ‍💡 처음으로 회원가입을 하면 현금처럼 쓸 수 있는 5000포인트가 주어지고 해당 포인트로 보증금을 결제할 수도 있습니다.

## **❗️CODIBUDDY 주요 기능**

- 프론트엔드, 백엔드, 모바일 등의 카테고리로 내가 찾는 기술스택에 맞는 스터디를 모아볼 수 있습니다.
- 스터디에 대한 정보를 보고 마음에 든다면 찜을 할 수 있습니다.
- 참여하고 싶은 스터디가 있다면, 보증금을 내고 스터디 참여 신청을 할 수 있습니다.
- 마이페이지에서 내가 참여하고 있는 스터디, 기간이 완료된 스터디, 찜한 스터디를 모아볼 수 있습니다.

## **🔧 Skills &Tools**

![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project_2/team5/client/uploads/a390f48ada7d28450f9d93e93c1db757/image.png)

## **👨‍👩‍👧‍ Team**

| 고수정<br>(FE, 팀장) | 김보민<br>(FE) | 이은비<br>(FE) | 박재인<br>(BE) | 최승연<br>(BE) |
| :-: | :-: | :-: | :-: | :-: |
| <p align="left">- 스터디 상세 페이지<br/>- 스터디 댓글 기능<br/>- 스터디 생성 페이지<br/>- 결제 페이지<br/>- 스터디 찜하기 기능<br/>- 기타 반응형 작업<br/></p> | <p align="left">- 메인 페이지 <br/>- 스터디 포지션 별 언어 태그 조회 <br/>- 스터디 포지션별 조회 <br/>- 마이 페이지<br/>- 마이 페이지 스터디 타입 별 조회(찜, 완료, 참여 중)<br/>- 스터디 컴포넌트</p> | <p align="left"><br/>- 로그인 모달<br/>- 회원가입 모달<br/>- 회원가입/로그인 시 예외 처리<br/>- 마이페이지 정보 수정하기 </p> | <p align="left">- 회원 CRUD<br/>- 이메일 중복체크<br/>- 유효 e-mail 체크<br/><br/></p> | <p align="left">- 스터디 CRUD<br/>- 언어 태그 API<br/>- JWT 토큰 이용한 인증<br/></p> |

## **🌱 Git**

### Branch

- `master (main)`: 바로 product로 release(배포)할 수 있는 브랜치
- `dev (develop)`: product로 release할 준비가 된 가장 안정적인 브랜치로 개발이 완료된 상태라면 **master** 브랜치로 merge
- `feature`: 새로운 기능을 추가할 때 사용하는 브랜치로 **dev** 브랜치에서 분기하여 진행되며, 개발이 완료된 기능은 **dev** 브랜치로 merge
  - **브랜치명 컨벤션** : `feat/{pageName}-{featureName}`

### Commit

|  "feat: ~ "  | 새로운 기능 추가   |
| :----------: | :----------------- |
|  "fix: ~ "   | 수정에 대한 커밋   |
| "bug" ~ " :  | 버그에 대한 커밋   |
| "styled: ~ " | 스타일이나 UI 수정 |
|  "docs: ~ "  | 문서 수정          |
