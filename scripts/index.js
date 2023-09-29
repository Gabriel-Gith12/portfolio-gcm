const index = {};

index.$menu = $('#sideMenu');
index.$navItem = $('.navItem');
index.$navItemName = $('.navItemName')
index.$home = $('#home');
index.$about = $('#about');
index.$skills = $('#skills');
index.$works = $('#works');
index.$contact = $('#contact');
index.$menuButton = $('#menuButton');
index.$scrollDown = $('#scrollDown');
index.isOpen = false;

// Função de rolagem
index.scroll = function (target) {
  $('html,body').animate({ scrollTop: $(target).offset().top }, 500);
}

// Função do botão de menu
index.showHideMenu = function () {
  index.$menu.toggleClass('sideMenuHide sideMenuShow');
  index.isOpen = !index.isOpen;
}

// Mudanças de classe móvel no carregamento inicial
if ($(window).width() <= 990) {
  index.$menu.addClass('sideMenuHide').removeClass('sideMenuShow');
  index.$scrollDown.hide();
}

index.eventListeners = function () {
  // quando a janela é redimensionada entre monitores grandes e pequenos
  $(window).on('resize', function () {
    if ($(window).width() > 990) {
      index.$menu.removeClass('sideMenuHide').addClass('sideMenuShow')
      index.$scrollDown.show();
      index.isOpen = false;
    } else {
      index.$menu.removeClass('sideMenuShow').addClass('sideMenuHide');
      index.isOpen = false;
      index.$scrollDown.hide();
    }
  });

  // Eventos de clique no menu de navegação para função de rolagem
  $('a[href*=\\#]').on('click', function () {
    index.scroll(this.hash);
  });

  // Ocultar menu ao clicar em um link
  index.$menuButton.on('click', index.showHideMenu);

  // Hide menu when clicking a link
  index.$navItem.on('click', function () {
    if (index.isOpen) {// Hide menu when clicking a link
      index.showHideMenu();
    }
  });

  // Botão de menu Evento da tecla ENTER
  index.$menuButton.on('keypress', function (e) {
    if (e.which === 13) {
      $(this).trigger('click');
    }
  })
}

// Método de Inicialização
index.init = function () {
  index.eventListeners();
}

// Documento pronto
$(function () {
  index.init();
})