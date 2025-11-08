import '../../tudo.css';
function Mapa() {
  return (
    <div class="body">
    <h1>Ponto de Retirada do Bazar (fictício)</h1>
    <hr/>
    <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890!2d-46.6333090845004!3d-23.550520984680548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bf1abcd123%3A0xabcdef1234567890!2sIFSP%20Campus%20São%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div class="info-mapa">
        <h2>Endereço</h2>
        <p><strong>Instituto Federal de São Paulo - IFSP</strong></p>
        <p>Rua do Exemplo, 1234 – Centro, São Paulo – SP, CEP 01000-000</p>

        <h2>Horário de Retirada</h2>
        <p>Segunda a Sexta: 09:00 às 18:00</p>
        <p>Sábado: 10:00 às 14:00</p>

        <h2>Instruções</h2>
        <p>Ao chegar, dirija-se à recepção e informe o nome associado à sua compra no bazar online. Caso tenha dúvidas, entre em contato pelo telefone (11) 99999-9999 ou e-mail: contato@integracaosolidaria.com.br.</p>
    </div>
</div>
  );
}

export default Mapa;