let result = document.querySelector('#result');

// result.contentDocument.body.innerHTML = "<h1>Hello World!</h1>";
// result.contentDocument.head.innerHTML = "<style> h1{color:red} </style>";
// result.contentWindow.eval('let a = 10; let b = 20; alert(a + b)');

let allInput = document.querySelectorAll('.lhs textarea');
// console.log(allInput[0]);

let htmlEditor, cssEditor, jsEditor = '';
allInput.forEach((el, index) => {
    el.addEventListener('keyup', () => {
        if (index == 0) {
            // console.log(el.value);
            htmlEditor = el.value;
        }
        if (index == 1) {
            // console.log(el.value);
            cssEditor = el.value;
        }
        if (index == 2) {
            jsEditor = el.value;
        }
        result.contentDocument.body.innerHTML = htmlEditor;
        result.contentDocument.head.innerHTML = `<style>${cssEditor}</style>`;
        result.contentWindow.eval(jsEditor);
    })
});


