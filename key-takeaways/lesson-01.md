# Làm quen với các công cụ sẽ sử dung
	## NVM: Node Version Manager
	## Git & GitHub:
		Git: quản lý source code
		GitHub: chia sẽ code, làm việc nhóm
 
	## Cấu hình Git:
		git config --global user.name <name>: config username
		git config --global user.email <email>: config email
		git config --global init.defaultBranch main: config default branch
	## Cài đặt VSCode
 
	## Kết nối với GitHub:
	## Cài đặt Playwright:
		npm init playwright@latest: cài đặt Playwright
 
	## Làm quen với các đoạn code Playwright cơ bản:
		goto = đi đến 
		expect = mong muốn 
		toHave = có <something>
	## Đưa code lên GitHub
		### Cmd run 1 lần
			git init: khởi tạo local repo
			git remote add origin <url of GitHub repo>: tạo repo GitHub và liên kết đến local repo
 
		### Cmd run mỗi khi có thay đổi về code
			git add .: thêm file vào staging 
			git commit -m "<message>": commit file
			git push origin main: push code lên repo GitHub
 
	## Cách tạo repo trên GitHub