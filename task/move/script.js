function Bee(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.direction = 'right'; // Sửa từ "derection" thành "direction"

    this.getBeeElement = function() {
        return '<img width="'+ this.size + '"' +
               ' height="'+ this.size + '"' +
               ' src="' + this.image + '"' +
               ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveBee = function(speed) {
        switch (this.direction) {
            case 'right':
                this.left += speed;
                if (this.left >= window.innerWidth - this.size) {
                    this.left = window.innerWidth - this.size; 
                    this.direction = 'down'; 
                }
                break;
            case 'down':
                this.top += speed; 
                if (this.top >= window.innerHeight - this.size) {
                    this.top = window.innerHeight - this.size; 
                    this.direction = 'left'; 
                }
                break;
            case 'left':
                this.left -= speed; 
                if (this.left <= 0) {
                    this.left = 0; 
                    this.direction = 'up'; 
                }
                break;
            case 'up':
                this.top -= speed; 
                if (this.top <= 0) {
                    this.top = 0; 
                    this.direction = 'right'; 
                }
                break;
        }
    }        
}

let bee1 = new Bee("bee.jpg", 0, 0, 50);

function start() {
    bee1.moveBee(5);
    document.getElementById("bee").innerHTML = bee1.getBeeElement(); 
}

// Tự động di chuyển ong mỗi 50ms
setInterval(start, 50);
