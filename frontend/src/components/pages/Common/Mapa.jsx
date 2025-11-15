import '../../tudo.css';

function Mapa() {
  return (
    <div className="body">
      <h1>Ponto de Retirada do Bazar</h1>
      <hr />

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.208238418961!2d-48.180643!3d-21.8085872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3be3649861f%3A0xe94a0edbb923e407!2sLar%20Escola%20Reden%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1731637060000!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa - Lar Escola Redenção"
        ></iframe>
      </div>

      <div className="info-mapa">
        <h2>Endereço</h2>
        <p><strong>Lar Escola Redenção</strong></p>
        <p>Rua Projetada, 123 – Araraquara – SP, CEP 14800-000</p>

        <h2>Horário de Retirada</h2>
        <p>Segunda a Sexta: 09:00 às 18:00</p>
        <p>Sábado: 10:00 às 14:00</p>

        <h2>Instruções</h2>
        <p>
          Ao chegar, dirija-se à recepção e informe o nome associado à sua compra no bazar online.
          Caso tenha dúvidas, entre em contato pelo telefone (11) 99999-9999 ou e-mail:
          contato@integracaosolidaria.com.br.
        </p>
      </div>
    </div>
  );
}

export default Mapa;
