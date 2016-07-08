var grid={
                nodes:[],
                    add: function(x,y,w,h,c){
                      var tmp = new _enamy(x,y,w,h,c);
                        this.nodes.push(tmp);
                    },
                generate:function(count,w,h,color){
                    var dw=5, dx=dw, dy=dw;
                    dCountX=Math.ceil(width/(w+dw))-1;
                    dAllW = Math.ceil((width-(w+dw)*dCountX)/2);
                    dy= dAllW;
                 for(var i=0; i<count; i+=1){
                     for(var j=0; j<dCountX; j+=1){
                         if (j==0){
                             dx+=Math.ceil(dAllW-dw/2);
                         }
                     this.add(dx, dy, w,h,color);
                         dx+=w+dw;
                     }
                     dy+=h+dw;
                     dx=dw;
                 }
                },
                delete: function(id){
                    this.nodes.splice(id, 1);
                },
                  draw: function(){
                      for (en in this.nodes){
                          this.nodes[en].draw();
                      }
                  }

            };
            var _enamy=function(x,y,w,h,color){
                this.x=x;
                this.y=y;
                this.width=w;
                this.height=h;
                this.color=color;
            };
            _enamy.prototype.draw = function(){
                drawRect(this.x, this.y, this.width, this.height, this.color)
            }
