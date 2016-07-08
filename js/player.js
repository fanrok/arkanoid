var player = {
                level : 1,
                hp : 5,
                x : 50,
                y : 440,
                width :100,
                height : 10,
                speed : 2,
                color : 'green',
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
                },
                     collision: function (){
                  if (this.x >= 540) {
                   this.x = 540;
                   }
                  if (this.x <= 0) {
                   this.x = 0;
                   }
                  },
                init:function(x,y,w,h,color){
                    this.x=x;
                    this.y=y;
                    this.width=w;
                    this.color=color;
                    this.height=h;
                }
            };
