const input = document.getElementById('input') as HTMLInputElement; // assim indicamos para o typescript que é um elemento input, especificamente. se não especificar ele identifica como HTMLElement, que não possue o atributo value, por exemplo
// input.value

input.addEventListener('input', (event) => {
  console.log(event.currentTarget.) // recomeçar a ve video 6
});
