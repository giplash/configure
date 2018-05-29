let sum = 0;
    const costValue = document.getElementById('costValue')
    $(function() {
      $('#enterbut1').click(function() {           
        for (let i = 1; i <= 4; i++) {
          $(`#enterblock${i}`).hide()
        }
        $("#enterblock1").fadeIn()
    });
      $('#enterbut2').click(function() {
        for (let i = 1; i <= 4; i++) {
          $(`#enterblock${i}`).hide()
        }
      $("#enterblock2").fadeIn()
    });
      $('#enterbut3').click(function() {
        for (let i = 1; i <= 4; i++) {
          $(`#enterblock${i}`).hide()
        }
      $("#enterblock3").fadeIn()
    });
      $('#enterbut4').click(function() {
        for (let i = 1; i <= 4; i++) {
          $(`#enterblock${i}`).hide()
        }
      $("#enterblock4").fadeIn()
    });
  });    
  $('.block__close').click(function(){   
    $(this).closest('.block').hide();
    const id = this.parentNode.getAttribute('id')[10]
    const container = document.querySelector('.participants');
    if(!this.parentNode.classList.contains('onEdit')) {
      container.innerHTML += `<div class="participant">
        <img src="img/hero${id}.jpg" alt="hero">
        <div class="info">
          <p><span>Герой ${id}</span>: $500;</p>
          <p><span>Инструмент</span>: $70;</p>
          <p><span>Костюм</span>: $30;</p>
        </div>
        <p><button class="edit" hero="${id}">Изменить</button></p>
        <p><button class="delete">Удалить</button></p>
      </div>`;
      sum += 600;
      costValue.innerHTML = sum;
    } else {
      this.parentNode.classList.remove('onEdit');
    }
    document.querySelectorAll('.participant').forEach(function(item) {
      item.children[3].children[0].onclick = function() {
        item.outerHTML = ''
        sum -= 600;
        costValue.innerHTML = sum;
      }
      item.children[2].children[0].onclick = function() {
        let id = this.getAttribute('hero');
        $(`#enterblock${id}`).fadeIn()
        document.getElementById(`enterblock${id}`).classList.add('onEdit');
      }
    });
});