Components cho bạn chia UI thành các phần độc lập, có thể tái sử dụng và suy nghĩ về từng phần một cách độc lập.

Về mặt khái niệm, Components tương tự JavaScript functions. Chúng nhận đầu vào tùy ý (được gọi là "props") và trả về React elements miêu tả cái gì nên xuất hiện trên màn hình.

```js
<Welcome name='tara' user = 'bestname' />
```
props gồm `name` va `user`.
****
#### Function and Class Components
Cách đơn giản nhất để định nghĩa một component là viết một JavaScript function.
```JavaScript
function Welcome(props) {
    return <h1>Welcome, {props.name}</h1>;
}
```

Hoặc cũng có thể sử dụng ES6 class để định nghĩa một component.
```JavaScript
class Welcome extends React.Component {
    render() {
        return <h1>Welcome, {this.props.name}</h1>;
    }
}
```
***

#### Luôn bắt đầu tên của component với một chữ cái in hoa
React xử lý các components bắt đầu với chữ thường như một DOM tags. Ví dụ `<div />` chỉ HTML div tag nhưng `<Welcome />` biểu thị cho một component và đòi hỏi `Welcome` trong phạm vi.
***
#### Composing Components
Components có thể tham chiếu đến các components qua output của chúng. Ví dụ demo trong file `script.js`.
#### Extracting Components
Chia components chính thành nhiều components nhỏ hơn. Cụ thể xem trong file `script.js`.

****
#### Props là Read-Only
React khá linh hoạt nhưng nó có một quy tắc nghiêm ngặt là: **Tất cả React components phải hoạt động như pure function với các props của chúng.**

**pure function**: Không cố gắng thay đổi đầu vào, và luôn trả về cùng giá trị với cùng input.
```js
function sum(a, b) {
  return a + b;
}
```

function impure thay đổi input của nó.
```js
function withdraw(account, amount) {
  account.total -= amount;
}
```