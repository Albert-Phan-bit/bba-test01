# Sơ lược qua về Version Control System (VCS)
    Hệ thống quản lý phiên bản
    + Quản lý:
        ++ Lịch sử thay đổi
        ++ Các version trước để có thể restore

    Các loại VCS:
    + Local
    + Centralized
    + Distributed (Phổ biến nhất)

# Sơ lược về Git
    Khác biệt giữa Git và GitHub
    + Git: là phần mềm, cmd line tool, quản lý version và đưa file vào git repo
    + GitHub: là một web service, có UI, nơi git repo được upload lên

# Git
    Three states
    Working Directory: nơi file được tạo or thay đổi
    Staging Area: nơi file được đưa vào để chuẩn bị commit
    Repositoru: nơi file đã được commit

    + Git cmd
        ++ git init: tạo repo
        ++ git add <file_name>: add file được chọn lên staging area
        ++ git add .: add tất cả file trong folder lên staging area
        ++ git commit -m <message>: commit các file trong staging area lên repo
        ++ git status: status của các file ở từng vùng
        ++ git log: show commit log cùng message

    Commit convention

## JavaScript

    node <file_name>.js => run file .js (save before run)
    Biến: var/let
        ưu tiên dùng let
        var có phạm vi global, let có phạm vi theo block
 Ex;

 {
var a = 10;
let b = 11;
}
console.log(a); // In ra: 10
console.log(b); // Lỗi: ReferenceError: b is not defined


    Hằng: giá trị ko đổi
