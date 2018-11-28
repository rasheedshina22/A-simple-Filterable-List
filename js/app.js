
document.getElementById('filter').addEventListener('keyup', filterList);

function filterList(e){
    document.querySelector(".list-group").style.display = 'block';
    var input_value = e.target.value.toLowerCase();
    if(input_value ==''){
        document.querySelector('.list-group').style.display = 'none';
    }else{
        var items = document.querySelectorAll('.list-group-item');
        Array.from(items).forEach(function(item){
        var item_value = item.innerHTML.toLowerCase();
        if(item_value.indexOf(input_value) == -1){
            item.style.display = 'none';
        }else{
            item.style.display = 'block';
        }
    });

    }
}