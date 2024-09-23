import saySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomethingInstance = new saySomething("Hello, TypeScript!");
saySomethingInstance.sayText(root);