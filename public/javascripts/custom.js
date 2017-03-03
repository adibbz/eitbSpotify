// const preview = document.querySelector('.preview');
// console.log(preview);

// function playSound() {
//     console.log(preview.dataset.preview);
// }

// preview.addEventListener('click', playSound);
/*-----------------------------------------------------------------
|
|   Custom Select Functionality
|
-----------------------------------------------------------------*/

$(function() {
  
  var $imdSelect = $('.imd-select');
  var $imdSelector = $imdSelect.find('.imd-selector');
  var $imdSelectList = $imdSelect.find('.imd-select-list');
  var $imdSelectListItem = $imdSelectList.children('li');
  
  
  // Hover
  $imdSelector.hover(function(){
    $(this).addClass('imd-focus');
  }, function() {
    $(this).removeClass('imd-focus');
  });
  
  // click to open menu list
  $(document).click(function(e){
    if(!$imdSelector.is(e.target) && $imdSelector.has(e.target).length === 0) {
      $imdSelectList.hide();
    } else {
      $imdSelectList.slideToggle('fast');
    }
  });
  
  // get menu list to selector
  $imdSelectListItem.each(function(){
    $(this).click(function(){
      // console.log($(this).text());
      $imdSelectListItem.removeClass('selected');
      $(this).addClass('selected');
      
      var dataValue = $(this).data('value');
      $('input[name="beerType"]').val(dataValue);
      $imdSelector.text($(this).text())
    });
  });
  
});