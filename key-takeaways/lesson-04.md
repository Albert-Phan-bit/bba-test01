# Phạm vi của biến
    Global: có thể truy cập được từ mọi nơi
    Function scope: chỉ có thể truy cập được trong hàm được khai báo
    Block scope: chỉ có thể truy cập được trong khối được khai báo

    ## Hoisting
        JS di chuyển các khai báo biến lên đầu phạm vi(scope) trước khi thực thi code(run code)
        Ex:
            console.log(x); // undefined (không phải error)
            var x = 5;

            // Tương đương với:
            var x;
            console.log(x); // undefined
            x = 5;

            // Với let và const:
            console.log(y); // Error: Cannot access 'y' before initialization
            let y = 5;

    ## Break: dùng để thoát khỏi vòng lặp ngay lặp tức
    ## Continue: dùng để bỏ phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo

    ## If...Else...

    ## Ternary operator

    ## for...in Loop: Dùng để duyệt qua các thuộc tính (properties) c1o thể đếm được của một object, bao gồm cả thuộc tính kế thừa.

    ## forEach Method: Method của Array để thực thi một function cho mỗi phần tử. !!Không thể dùng break hoặc continue.

    ## Utils function
        