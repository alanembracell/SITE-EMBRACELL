
function autenticar() {
  const senha = document.getElementById('senha').value;
  if (senha === '1234') {
    document.getElementById('painel').style.display = 'block';
  } else {
    alert('Senha incorreta!');
  }
}

function gerarOS() {
  const cliente = document.getElementById('cliente').value;
  const descricao = document.getElementById('descricao').value;
  const status = document.getElementById('status').value;
  const codigo = Math.floor(Math.random() * 100000).toString();
  const os = { cliente, descricao, status, codigo };
  localStorage.setItem('OS_' + codigo, JSON.stringify(os));
  document.getElementById('osGerada').innerText = 'OS gerada com sucesso! Código: ' + codigo;
}

function buscarOS() {
  const codigo = document.getElementById('osBusca').value;
  const osData = localStorage.getItem('OS_' + codigo);
  if (osData) {
    const os = JSON.parse(osData);
    document.getElementById('resultadoConsulta').innerHTML = `
      <p><strong>Cliente:</strong> ${os.cliente}</p>
      <p><strong>Problema:</strong> ${os.descricao}</p>
      <p><strong>Status:</strong> ${os.status}</p>
    `;
  } else {
    document.getElementById('resultadoConsulta').innerText = 'OS não encontrada.';
  }
}
