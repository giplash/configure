jQuery((f) => {
    let element = f('#return');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](200);
    });
});
