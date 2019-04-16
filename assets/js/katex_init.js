// var elements = document.getElementsByTagName('script');

// Array.prototype.forEach.call(elements, function (element) {
//     if (element.type.indexOf('math/tex') !== -1) {
//         // Extract math markdown
//         var textToRender = element.innerText || element.textContent;

//         // Kramdown and KaTeX workaround
//         // https://github.com/rohanchandra/type-theme/issues/47
//         textToRender = textToRender.replace(/%.*/g, '');

//         // Create span for KaTeX
//         var katexElement = document.createElement('span');

//         var displayMode = true;
//         // Support inline and display math
//         if (element.type.indexOf('mode=display') !== -1) {
//             // katexElement.className += "math-display";
//             textToRender = '\\displaystyle {' + textToRender + '}';
//         } else {
//             katexElement.className += "math-inline";
//             displayMode = false;
//         }

//         katex.render(textToRender, katexElement, {
//             displayMode: displayMode,
//             leqno: displayMode
//         });
//         element.parentNode.insertBefore(katexElement, element);
//     }
// });


$("script[type='math/tex; mode=display']").replaceWith(
    function(){
        var tex = $(this).text();
        return "<div class='math-display'>" + 
             katex.renderToString(tex, {
                 leqno: true,
                 displayMode: true
             }) +
             "</div>";
  });


$("script[type='math/tex']").replaceWith(
    function(){
        var tex = $(this).text();
        return "<span class='inline-equation'>" + 
             katex.renderToString(tex, {
                 displayMode: false
             }) +
             "</span>";
  });