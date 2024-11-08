document.getElementById('denunciaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('denunciaForm').reset(); 
    document.getElementById('mensagem').classList.remove('hidden'); 
});

