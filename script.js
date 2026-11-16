document.querySelectorAll('.carrossel').forEach((carrossel) => {
  const trilho = carrossel.querySelector('.carrossel-trilho');
  const itens = carrossel.querySelectorAll('.carrossel-item');
  const contador = carrossel.querySelector('.carrossel-contador');
  const botoes = carrossel.querySelectorAll('.carrossel-btn');

  // distância entre o início de uma foto e o da seguinte
  const passo = () =>
    itens.length > 1 ? itens[1].offsetLeft - itens[0].offsetLeft : trilho.clientWidth;

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      trilho.scrollBy({
        left: Number(botao.dataset.direcao) * passo(),
        behavior: 'smooth',
      });
    });
  });

  trilho.addEventListener('scroll', () => {
    const indice = Math.round(trilho.scrollLeft / passo());
    contador.textContent = `${indice + 1} / ${itens.length}`;
  });
});