import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.boxedmonaco.js';
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return './css.worker.boxedmonaco.js';
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return './html.worker.boxedmonaco.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.boxedmonaco.js';
		}
		return './editor.worker.boxedmonaco.js';
	}
};

window.boxedMonaco = monaco;
