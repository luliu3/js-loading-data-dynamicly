/**
 * Created by luliu3@iflytek.com on 2016/8/15.
 */

//
function formatTemplate(data, template) {
    var format = {
        name: function(x) {
            return x;
        }
    };

    return template.replace(/{(\w+)}/g, function(v1, v2){
        if (!v2) {
            return '';
        }
        return (format && format[v2]) ? format[v2](data[v2]) : data[v2];
    });
}

//
function fill_data(template_id, target_id, data) {
    var template = $('#' + template_id).html();
    var arr = [];
    $.each(data.data, function (i, val) {
        arr.push(formatTemplate(val, template));
    });
    $('#' + target_id).append(arr.join(''));
}

//
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
}
