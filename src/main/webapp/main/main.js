var maintext;
$('.itembox').click(function() {
maintext=$(this).children('.w3-container').children('p').eq(0).text();
console.log(maintext)
location.href = '../main/mainsub.html?baseAddress='+maintext;
});