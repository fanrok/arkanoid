var ball={
                speed:1,
                dx:1,
                dy:-1,

                color:'blue',
                x:0,
                y:0,
                radius:5,

                draw: function(){
                drawCircl(this.x, this.y, this.radius, this.color);
                },
                init:function(x,y,radius,color){
                    this.x=x;
                    this.y=y;
                    this.radius=radius;
                    this.color=color;

                },
                move:function(){
                    this.x+=this.speed*this.dx;
                    this.y+=this.speed*this.dy;
                },
                collision:function(){
                    for (var i in grid.nodes){
                        var enamy = grid.nodes[i];
                        if (isCollision(this.x-this.radius, this.y-this.radius, this.radius*2, this.radius*2, enamy.x, enamy.y, enamy.width, enamy.height)){
                            this.dy*=-1;
                            grid.delete(i);
                        }
                    }
                    if (isCollision(this.x-this.radius, this.y-this.radius, this.radius*2, this.radius*2, player.x, player.y, player.width, player.height)){
                       this.dy*=-1;
                    }

                    if(this.x+this.radius >= width){
                        this.dx = -1;
                    }
                    if(this.x-this.radius <= 0){
                        this.dx = 1;
                    }
                    if (this.y-this.radius <= 0){
                        this.dy = 1;
                    }
                }
            }
