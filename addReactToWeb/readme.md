https://vi.reactjs.org/docs/add-react-to-a-website.html

### Thêm JSX vào Project
**Bước 1**: Chạy `npm init -y` (nếu thất bại, đây là link [hướng dẫn cách sửa](https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d))

**Bước 2**: Chạy `npm install babel-cli@6 babel-preset-react-app@3`
****
### Chạy JSX Preprocessor

Tạo một thư mục có tên là src và chạy câu lệnh terminal sau đây:

`npx babel --watch src --out-dir . --presets react-app/prod`

Đừng đợi cho nó kết thúc - Câu lệnh này sẽ bắt đầu theo dõi JSX một cách tự động.
****
### Nén code .js thành min.js 

credit: https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3

In production, it is recommended to minify any JavaScript code that is included with your application. **Minification can help your website load several times faster,** especially as the size of your JavaScript source code grows.

Here's one way to set it up:

1. [Install Node.js](https://nodejs.org/)
2. Run `npm init -y` in your project folder (**don't skip this step!**)
3. Run `npm install terser`

Now, to minify a file called `like_button.js`, run in the terminal:

```
npx terser -c -m -o like_button.min.js -- like_button.js
```

This will produce a file called `like_button.min.js` with the minified code in the same directory. If you're typing this often, you can [create an npm script](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633) to give this command a name.