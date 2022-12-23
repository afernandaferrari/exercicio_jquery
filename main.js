$('#adicionar').click(() => {
    const valor = $('#texto').focus().val()
    if (valor) {
      $('#texto').val('')
      $('<li>')
        .text(valor)
        .appendTo('#lista')
        .click(() => $(event.target).toggleClass('riscado'))
    }
  })

  $('#texto').focus().keyup(() => {
    if (event.keyCode === 13) $('#adicionar').click()
  })