Em JavaScript, `throw`, `try`, `catch` e `new Error` são usados para lidar com erros e exceções. Aqui está uma explicação rápida de cada um:

- **throw**: A instrução `throw` permite criar um erro personalizado. Tecnicamente, você pode lançar uma exceção (lançar um erro). A exceção pode ser uma String, um Número, um Booleano ou um Objeto em JavaScript¹. Por exemplo:
```javascript
throw "Too big";  // lança um texto
throw 500;  // lança um número
```

- **try/catch**: A instrução `try` permite definir um bloco de código para ser testado quanto a erros durante sua execução. A instrução `catch` permite definir um bloco de código a ser executado, se ocorrer um erro no bloco `try`¹. Por exemplo:
```javascript
try {
  // Bloco de código para tentar
} catch (err) {
  // Bloco de código para lidar com erros
}
```

- **new Error**: O JavaScript criará um objeto de erro com duas propriedades: nome e mensagem, quando ocorrer um erro¹. Por exemplo:
```javascript
throw new Error('my error');
```

Essas instruções são usadas em conjunto para lidar com erros e exceções em JavaScript¹.

Origem: conversa com o Bing, 17/02/2024
(1) JavaScript Errors Try Catch Throw - W3Schools. https://www.w3schools.com/js/js_errors.asp.
(2) try...catch - JavaScript | MDN. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch.
(3) JavaScript Try Catch: Exception Handling Explained - freeCodeCamp.org. https://www.freecodecamp.org/news/error-handling-and-try-catch-throw/.
(4) try...catch - JavaScript | MDN. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch.
