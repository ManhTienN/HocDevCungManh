// HTML DOM
/*
1.Element: ID, Class, Tag, Css selector, HTML collection
    +ID: Trả về thẳng luôn đối tượng đó(getElementById)
    +Class: Trả về giống như 1 cái mảng (Select qua class)(getElementsByClassName)
    +Tag: Giống như class trả về 1 HTMLCollection và nhiều đối tượng bên trong (Select qua tên thẻ)(getElementsByTagName)
    +Css selector:
        -QuerySelector: Lấy thẳng luôn 1 đối tượng matching với thằng chuyền vào 
                        qua cái Css Selector chuyền vào(querySelector)
        -QuerySelectorAll: Lấy tất các đối tượng element mà có cái class mà mình chuyền vào.(querySelectorAll)
    +HTML collection: (document.form)
2. Attribute:
        DOM Attribute:

3. Text:
*/
var headingElement = document.querySelector('a');

/*
+ Setter:
        headingElement.href = 'youtube.com';
        headingElement.target = 'blank';
+ SetAttribute
        headingElement.setAttribute = ('class','data');
+ GetAttribute
        headingElement.getAttribute = ('class');

*/