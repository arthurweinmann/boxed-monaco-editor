# Boxed Monaco Editor

The human DNA, comprised of approximately 3.5 billion base pairs, equates to about 750 Megabytes of data. This constitutes all the information necessary to construct a human being. Moreover, it encapsulates the instructions on how to interpret this data.

When I first compiled the Monaco Editor, the sum of all files amounted to around 1.4 Gigabytes - twice the size of the source code required for human construction! This includes files produced for testing, files created for various bundling systems like webpack, vite, parcel, among others, and files to support different programming languages in the editor. For sure, it is not only for the editor in itself. Nevertheless, it still represents a significant level of complexity. One would say more complexity than needed for a browser-based code editor - which, by the way, is quite impressive!

Instead of re-engineering the entire thing, I have endeavored to box this complexity into a single JavaScript file that can be utilized with vanilla JavaScript, without the need to understand and research ways to do it, which, to be fair, exist.

## Sources

- https://berthub.eu/articles/posts/amazing-dna/

# How to use

First, download and untar the compiled code at [https://github.com/arthurweinmann/boxed-monaco-editor/releases/download/498b990/boxedmonaco.tar.gz](https://github.com/arthurweinmann/boxed-monaco-editor/releases/download/498b990/boxedmonaco.tar.gz)

Then you may copy and paste all the files from the release into a directory served on your website, for example in `https://mywebsite.com/js/lib/`.

Finally, insert this script into your webpage (either in the <head> or at the end of the <body>):

```html
<script id="boxedMonacoScript" src="/js/lib/app.boxedmonaco.js"></script>
```

The script id `boxedMonacoScript` must remain the same as it used to determine the path to your folder containing the other files the editor will need to download asynchronously. The entry script app.boxedmonaco.js from the example must also remain the same.

## Manual compilation

Clone this fork:

```bash
git clone https://github.com/arthurweinmann/boxed-monaco-editor
```

Reproduce the steps from [.github/workflows/release.yml](.github/workflows/release.yml) locally. The built files you have to include in your website will then be located in `./boxed/dist`.

# I am curious

I'd love for you to take a look at my draft blog article: [https://arthurweinmann.com/articles/monaco_editor_is_more_complex_than_DNA.html](https://arthurweinmann.com/articles/monaco_editor_is_more_complex_than_DNA.html).

# License

Licensed under the [MIT](https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt) License.
