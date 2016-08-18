    $(function(){
        $('#cakePic').button
        $('#cakePic').click(function(){
            $('#jqC1').dialog({modal: true});
            $('#jqC1').css('border', 'solid 2px #A81336');
            $('#jqC1').css('background', '#EAC2D9');
            $('#jqC1').css('padding', '10px');
            $('#jqC1').css('border-radius', '10px');
            $('#jqC1').effect('slide');
        });
    });