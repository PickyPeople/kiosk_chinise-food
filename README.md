how to upload my project to my github(초기설정)
1. we have to open git bash
2. we set our name & email (git config --global user.name "our name") (git con fig --global user.email github email)
3. git init(우리가 깃을 초기화 해준다는 내용 우리의 파일에 .git이라는 파일이 숨겨져서 생긴다)
4. git add . (나는 전부다 올리겠다)
5. git commit -m "commit name" (히스토리를 만들기 시작한다.)
6. git remote add origin 나의 레퍼스토지 주소~~~(나의 깃허브를 올리기 위한 연결고리를 만드는 것이다.)
7. git push origin main(master) (이제 우리가 만든 프로그램을 올린다)

how to upload my project to my github(뭔가 변화를 주고 다시 올리는 경우)
1. open the git bash
2. git add .
3. git commit -m "commit name" (여기서의 commit name은 이전꺼와는 다른 이름으로 해야한다.)
4. git push origin master(main) 
