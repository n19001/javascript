switch(lang) {
  case 'ja':
    document.querySelector('option[value="index.html"]').selected = ture;
    break;
  case 'en':
    document.querySelector('option[value="index-en.html"]').selected = true;
    break;
  case 'zh':
    document.querySelector('option[value="index-zh.html"]').selected = true;
    break;
}
