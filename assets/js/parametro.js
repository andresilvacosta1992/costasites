var url = new URL(window.location.href);
var keyword = url.searchParams.get('k');
if (keyword === null) {
    var keyword = "Criação de Sites e Google Ads";
  }
var expressao = /-/gm;
var keyword2 = keyword.replace(expressao," ");
var palavras = keyword2.split(" ");

//fazer com que cada palavra comece com letra maiúscula
for (let i = 0; i < palavras.length; i++) {
  palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
}
var keyword = palavras.join(" ");



function bntWhatsapp() {
    window.location.href = "https://wa.me/5511972855782?text=Ol%C3%A1%2C+gostaria+de+saber+sobre *" + keyword + "*";
  }



  