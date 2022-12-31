const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);


function addToCart(id, price) {
  let data = {
    "id": id,
    "price": price
  }
   $.ajax({
            url: `/cart/addtocart`,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(res){
              alert('Đã thêm vào giỏ hàng!');
            },
            error: function(res){
                alert('Lỗi, không thêm được vào giỏ hàng');
            }
    });

  
}