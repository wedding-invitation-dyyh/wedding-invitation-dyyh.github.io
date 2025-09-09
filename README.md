# pasalavida
Pasalavida project

## 0. 기본 정보
### Sample
https://mywday.site/default/

--- 

## 2. 프로젝트 셋업 & 배포
- 프로젝트 클론

https://github.com/allzero-kwon/pasalavida.git

- node 설치
https://velog.io/@ljs923/Node.js-다운로드-및-설치하기

- 프로젝트 빌드 & 배포  

```
npm install 
npm run build
npm run deploy
```

- 프로젝트 중간중간 확인 

```
npm run dev
```

---

## 3. 커스터마이징 

1. data.json 업데이트 

default 대신 key 집어 넣기 -> https://mywday.site/<new_key> 로 접근가능 
```
{
  "default" : {
    ...
  }
}
```



1. 이미지 & 비디오 바꾸기 
1.1 이미지 사진 줄이기 
빠른 로딩을 위해 사진 사이즈를 줄이기 (size는 width 기준 1000이 좋음)
https://www.iloveimg.com/ko/resize-image/resize-jpg

1.2 이미지 저장
- Gallery 이미지 (png, jpeg, jpg만 가능)
src/assets/<new_key>/gallery/ 

- Main 이미지 
src/assets/<new_key>/main/main.png
main.png 로 꼭 저장하기! (이유는 아직 없음)



2. 멘트 및 정보 변경
src/data.json 



