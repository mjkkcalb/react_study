## react_study
배운 내용 간단 요약 정리

### 231115
------------------------
>Basic.

1. 리액트는 하나의 컴포넌트가 여러개의 엘리먼트를 반환한다. 리액트 사용을 위한 return문 안에는 반드시 하나의 최상위 태그가 필요하다.
2. div 태그 대신 <fragment></fragment>태그가 더 많이 사용되며 <></>로도 작성 가능하다.
3. js,jsx외 문서를 불러올 경우에는 import 와 from 태그를 이용해 경로를 작성한다.
4. style값 적용
```
스타일값 직접 적용 -> ex) <li style={{color: 원하는 컬러}}>
스타일 변수로 적용 -> ex) <li style={list}> , return 값 위쪽으로 const list = {color: 원하는 컬러};
스타일 외부 문서로 적용 ex) <li classname = "list"> , import 값으로 외부 css 연결 및 css에 .list{color: 원하는 컬러}; 작성
스타일 프레임 위크 적용
```
