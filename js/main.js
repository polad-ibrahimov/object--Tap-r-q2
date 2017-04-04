function myFunction(idName){
    var self = this;

this.main = document.getElementById('main');
this.img = document.getElementById('img');
    

this.img.addEventListener('click', function(event) {
    self.x = event.x;
    self.y = event.y;

    self.span = document.createElement('span');
    self.span.className = 'badge';
    self.span.style.top = self.y;
    self.span.style.left = self.x;
    self.main.appendChild(self.span);
});

this.main.addEventListener('click', function(event) {
    if (event.target.className == 'badge') {
        self.main.removeChild(event.target);
    }
});
}