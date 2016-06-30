var player = {
                level : 1,
                hp : 5,
                x : 50,
                y : 440,
                width :100,
                height : 10,
                speed : 1,
                color : 'yellow',
                draw : function (){
                    drawRect(this.x, this.y, this. width, this.height, this.color);
                },
                move : function () {
                    if (isKeyDown('D')){
                        this.x+=this.speed;
                    }
                    if (isKeyDown('A')){
                         this.x-=this.speed;
                    }
                }
            };
