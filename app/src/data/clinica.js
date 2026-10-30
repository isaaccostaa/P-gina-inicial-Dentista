// Dados de contato num só lugar. Mantenha iguais ao Perfil da Empresa no Google
// e ao index.html (dados estruturados): nome, endereço e telefone idênticos ajudam no SEO local.
const enderecoBusca = 'Medical Center, R. Maestro João Seppe, 900 - Jardim Paraíso, São Carlos - SP, 13561-180';

export const clinica = {
  nome: 'Dra. Kamille Gallego Vieira',
  cro: 'CRO-SP 170569',
  local: 'Medical Center',
  rua: 'R. Maestro João Seppe, 900',
  bairro: 'Jardim Paraíso',
  cidade: 'São Carlos - SP',
  cep: '13561-180',
  enderecoCompleto: 'Medical Center - R. Maestro João Seppe, 900 - Jardim Paraíso, São Carlos - SP, 13561-180',
  whatsapp: '5516996257573',
  telefoneExibicao: '(16) 99625-7573',
  instagram: 'https://www.instagram.com/dra.kamillevieira/',
  instagramUsuario: '@dra.kamillevieira',
  mapaUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoBusca)}`,
  mapaEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(enderecoBusca)}&output=embed`,
};
