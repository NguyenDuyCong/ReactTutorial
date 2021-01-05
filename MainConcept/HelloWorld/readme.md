JSX là một cú pháp mở rộng của JavaScript, được khuyến khích sử dụng với React để mô tả giao diện (UI). JSX có thể trông giống với ngôn ngữ khuôn mẫu, nhưng JSX đi kèm với toàn bộ tính nắng của JavaScript. Ví dụ cú pháp JSX cơ bản:
```JSX
const element = <h1>Hello, World!</h1>;
```
***
Vì JSX gần với JavaScript hơn là so với HTML, ReactDOM sử dụng chuẩn quy tắc tên `camelCase` cho thuộc tính thay vì dùng tên thuộc tính gốc của HTML.
```JSX
const element = <div tabIndex='0'></div>;
const element = <ing src={user.avatarUrl}>;
```
***
#### JSX chống tấn công kiểu Injection
```JSX
const title = response.potentiallyMaliciousInput;
// Việc này an toàn
cost element = <h1>{title}</h1>
```
Mặc định, React DOM loại bỏ những kí tự đặc biệt ở bên trong bất kì giá trị nào được nhúng vào JSX trước khi render chúng. Việc này đảm bảo không có giá trị xấu nào được vô tình được đưa vào ứng dụng. Mọi thứ đều được chuyển thành chuỗi trước khi được render. Việc này giúp ngăn chặn phương thức tấn công XSS (cross-site-scripting).

***
#### JSX là đối tượng
Babel biên dịch JSX thành những câu gọi hàm `ReacDOM.createElement()`
```JSX
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);
```
