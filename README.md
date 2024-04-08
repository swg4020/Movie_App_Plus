# Mvoie_App_Plus

### 2024.04.08

### 이미지 
![프로젝트 이미지](https://github.com/swg4020/Movie_App_Plus/assets/162289678/135a0d6b-4dc2-4020-a670-9bd6096e3771)

---
### 개발 기간
 2024.03.25 ~ 2024.04.08
---
### stack
js, react, node.js, git, github

### 프로젝트 소개

### 프로젝트 목적 (추가수정)
간단한 검색과 리뷰, 평점, 검색, 예고편 등을 보기위해 만듬

### 프로젝트 기획 

![기획](https://github.com/swg4020/Movie_App_Plus/assets/162289678/66c9c890-e3c0-4781-ba8f-10ce4f13812c)

03-25 
- 기획 정리
- 계획서 작성
- 레퍼런스 찾기
- 필요자료 찾기
- 깃허브 등록

03-26
- Router 설정
- 각 컴포넌트 제작
- API 설정

03-27
- Home ui 및 페이지 구성
- header 컴포넌트 구성

03-28
- Detail ui 및 페이지 구성
- Search ui 및 페이지 구성

03-29
- 반응형 (home,detail)
- Helmet
- Header scroll event

03-30~31
- 반응형 (search)
- Loding 설정
- 추가작업
- 추가 기능 검색

04-01
- 보정
- 404 ui 및 페이지 구성
- Footer 컴포넌트 구성

04-02~8
- Deploy
- 기능추가 보정 및 리팩토링
- Genres 컴포넌트 구성
- Genres ui 및 페이지 구성
- 코드 정리
- 배포 및 마무리.


### 프로젝트 URL  https://swg4020.github.io/Movie_App_Plus/ 

## 라이브러리
- [x] "react-router-dom": "^6.22.3", / npm i react-router-dom
- [x] "styled-reset": "^4.5.2", / npm i styled-reset
- [x] "styled-components": "^6.1.8", / npm i styled-components
- [x] "react-hook-form": "^7.51.2", / npm i react-hook-form
- [x] "swiper": "^11.0.7", / npm i swiper
- [x] "react-helmet-async": "^2.0.4",/ npm i react-helmet-async
- [x] "react-icons": "^5.0.1", / npm i react-icons
- [x] "react-spinners": "^0.13.8", / npm i react-spinners
- [x] "react-player": "^2.15.1", / npm i react-player


## *프로젝트 진행중 느낀점
이번 프로젝트는 배우는 점이 정말 많은 프로젝트가 되었던것 같습니다. API의 기능을 가져오는 것은 가능했지만 기능을 내가 만들고자 하는 방향으로 가져가는 것은 정말 어려웠습니다 기능을 가져왔지만 부가 속성이나 쿼리를 가져와서 사용해야만 했고 쿼리뿐만이 아닌 각종 훅들의 기능이라던지 여러가 기능을 가져와서 사용하는 것이 어려웠습니다 어려운 점을 해결하기 위해서 참고사이트나 각종 자료들을 찾아보고 수정도해보고 수정한 값을 바꿔도 보고 오류가 발생한다면 다시 검색을 통해 해결해나갔습니다 처음 프로젝트라 수정사항들도 아직 많이있고 배울점도 많은 프로젝트였습니다 이번프로젝트에서 배운점은 API를 활용하는 방법은 여러가지가 있고 특히 쿼리 값을 가져와서 사용하는 것이 중요하다는 것을 배웠습니다 이번 프로젝트에서 유용하게 사용한 swiper, hook등이 있습니다 swiper는 슬라이드를 수월하게 만들어주는 라이브러리였습니다. hook은 여러가지 기능들이 많은 라이브리러이였습니다. 이번 프로젝트에서 반성할 점은 api활용이였습니다 정작 가져와도 내가 만들고자 하는 방향으로 사용하기 위해서 어떤 값을 줘야하고 어떻게 해줘야하는지 등을 조금더 세세하게 api의 설명을 읽어 보는 것이였습니다. 설명을 덜 읽고 사용하다보니 엉뚱하게 값을 가져오고 수정하기도 벅찬 느낌이였습니다 그리고 스타일을 수정하는 것에도 많이 부족함을 느꼇습니다 조금더 보기 좋거나 가독성을? 올리는 방향으로 참고자료를 많이 찾아서 봐야할것같습니다.

레퍼런스
한국에서 운영하는 OTT사이트를 참고.

수정 사항
디테일 장르 폰트 사이즈 수정 패딩도 수정
탑버튼 추가
페이지 위치 수정
더보기 위치 수정
장르 탑에 뭐하는페이지 인지 수정
로그인 수정 완료
회원가입, 로그인 반응형 수정
