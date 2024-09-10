const avanca = document.querySelectorAll('.btn-proximo');

avance.foreach(button => {
    button.addeventlistener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getattribute('data-proximo');

        atual.classlist.remove('ativo');
        document.getElementById(proximopasso) .classlist.add ("ativo")
    })
})