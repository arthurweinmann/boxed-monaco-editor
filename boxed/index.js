import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired

// Webpack tree shaking side effect unused variable thingy removes this or a variable declaration not used
// TODO: figure it out
// function getMonacoEditor() {
// 	return monaco.editor;
// }

window.boxedMonaco = monaco.editor;

// monaco.editor.create(document.getElementById('container'), {
// 	value: 'console.log("Hello, world")',
// 	language: 'javascript'
// });
