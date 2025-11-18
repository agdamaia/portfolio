let texto = document.querySelector("#texto");
texto.textContent= "Ágda";

let nome = prompt("Qual é o seu nome?");

if (nome == null){
    texto.textContent = "Seja bem vindo;!";
}
else 
{texto.textContent = nome;

}