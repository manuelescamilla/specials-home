const searchForm = document.querySelector('.js-search-form');
const submitButtonGroup = document.querySelector('.js-search-submit-button-group');

if (searchForm.addEventListener) {
    searchForm.addEventListener("submit", function(evt) {
        evt.preventDefault();
        
        if( (document.querySelector('.js-search-input-query').value) !== ''){
            searchForm.submit();
        } else {
            submitButtonGroup.classList.add('shake');
            $('.js-search-submit-button-group').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => submitButtonGroup.classList.remove('shake'));
        }
    }, true);
}
