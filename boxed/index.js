import * as monaco from 'monaco-editor';
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		let script = document.getElementById("boxedMonacoScript");
		if (script !== undefined) {
			let src = script.getAttribute('src');
			let spl = src.split("/");
			spl.pop();
			if (spl !== undefined) {
				src = spl.join("/");

				if (src.endsWith('/')) {
					src = src.slice(0, -1);
				}

				if (label === 'json') {
					return src + '/json.worker.boxedmonaco.js';
				}
				if (label === 'css' || label === 'scss' || label === 'less') {
					return src + '/css.worker.boxedmonaco.js';
				}
				if (label === 'html' || label === 'handlebars' || label === 'razor') {
					return src + '/html.worker.boxedmonaco.js';
				}
				if (label === 'typescript' || label === 'javascript') {
					return src + '/ts.worker.boxedmonaco.js';
				}
				return src + '/editor.worker.boxedmonaco.js';
			}
		}

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
