#### Element là những mảnh ghép nhỏ nhất của các ứng dụng React
một element mô tả những gì bạn muốn nhìn thấy trên màn hình.
```JSX
const elememt = <h1>Hello, World!</h1>
```
****
#### Cập nhật element
Các React element là bất biến. Một khi tạo ra một element thì không thể thay đổi các children hoặc attribute của nó.

Cách duy nhất để cập nhật "giao diện" là tạo ra một element mới và truyền nó vào `ReactDOM.rende()`.
***
Với kinh nghiệm của chúng tôi thì chúng ta nên suy nghĩ về cách “giao diện” (UI) nên trông như thế nào tại mọi thời điểm hơn là suy nghĩ làm thế nào để thay đổi “giao diện” (UI) theo thời gian, điều này sẽ loại bỏ được rất nhiều “lỗi” (bug).