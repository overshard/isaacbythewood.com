$(document).ready(function() {
    var kaleidoscope = function(p) {
        p.cacheTriangle;
        p.imgCopy;
        p.cache;
        p.img;
        p.imgGlitch;
        p.changeImgG;
        p.j = -1;
        p.triangleSize = 450;
        p.triangleHeight = p.triangleSize * p.sqrt(3) / 2;
        p.triangles = [];
        p.canvas = {};
        p.cnv = {};
        p.doGlitch = false;
        p.offset = 0;
        p.doChangeImg = false;
        p.offsetChangeImg = 0;

        p.preload = function() {
            p.img = p.loadImage('static/images/kaleidoscope.jpg');
        };

        p.setup = function() {
            p.initSetup();
            setInterval((function() {
                return p.setDoGlitch();
            }), 7000);
        };

        p.initSetup = function() {
            p.cnv = p.createCanvas(window.innerWidth, window.innerHeight);
            p.cnv.id('kaleidoscope__canvas');
            p.cnv.class('kaleidoscope__canvas');
            p.cache = new p.Cache();
            p.initTriangles();
            p.imgCopy = p.createImage(p.triangleSize, p.triangleSize);
            p.cacheTriangle = p.createGraphics(p.triangleSize, p.triangleSize);
            p.cacheTriangle.strokeWeight(0);
            p.cacheTriangle.triangle(0, 0, p.triangleSize, 0, p.triangleSize / 2, p.triangleHeight);
            p.pixelDensity(1);
            p.imgGlitch = p.createImage(p.img.width, p.img.height);
        };

        p.setDoGlitch = function() {
            p.doGlitch = true;
            p.imgGlitch.copy(p.img, 0, 0, p.img.width, p.img.height, 0, 0, p.imgGlitch.width, p.imgGlitch.height);
        };

        p.glitch = function() {
            var draw, img;
            img = p.imgGlitch;
            draw = function() {
                var index, x, y;
                img.loadPixels();
                y = 0;
                while (y < img.height) {
                    x = 0;
                    while (x < img.width) {
                        index = (x + y * img.width) * 4;
                        if (img.pixels[index + 4] === void 0 || img.pixels[index + 9] === void 0) {
                            img.pixels[index] = 0;
                            img.pixels[index + 1] = 0;
                            img.pixels[index + 2] = 0;
                            img.pixels[index + 3] = 0;
                        } else {
                            img.pixels[index] = img.pixels[index + 4];
                            img.pixels[index + 1] = img.pixels[index + 9];
                        }
                        x++;
                    }
                    y++;
                }
                return img.updatePixels();
            };
            draw();
            if (p.offset === 5) {
                p.doGlitch = false;
                p.offset = 0;
            }
        };

        p.draw = function() {
            var i, img;
            img = p.img;
            if (p.doGlitch) {
                p.offset += 1;
                p.glitch();
                img = p.imgGlitch;
            }
            p.cache.move();
            p.cache.cut(img);
            i = 0;
            while (i < p.triangles.length) {
                p.triangles[i].display();
                i++;
            }
            p.changeImg();
        };

        p.changeImg = function() {
            if (p.doChangeImg) {
                p.doGlitch = false;
                p.changeImgG.image(p.img_c, -p.img_c.width + p.offsetChangeImg, 0);
                p.img = p.changeImgG;
                p.offsetChangeImg += 5;
                if ((p.offsetChangeImg - p.img_c.width) >= 0) {
                    p.doChangeImg = false;
                }
            }
        };

        p.kTriangle = function(x, y, angle, scaleX, scaleY) {
            this.x = x;
            this.y = y;
            this.angle = angle;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
            this.display = function() {
                p.push();
                p.translate(this.x, this.y);
                p.scale(this.scaleX, this.scaleY);
                p.rotate(this.angle);
                p.image(p.imgCopy, 0, 0);
                p.pop();
            };
        };

        p.Cache = function() {
            this.x = (p.img.width - p.triangleSize) / 2;
            this.y = (p.img.height - p.triangleHeight) / 2;
            this.speedX = 0;
            this.speedY = 0;
            this.move = function() {
                var mx, my;
                mx = p.mouseX;
                my = p.mouseY;
                if (p.mouseX === 0) {
                    mx = this.x;
                    my = this.y;
                }
                this.speedX = (mx - this.x) / 20;
                this.speedY = (my - this.y) / 20;
                this.x += this.speedX;
                this.y += this.speedY;
            };
            this.cut = function(img) {
                var mx, my;
                mx = p.map(this.x, 0, p.width, 0, p.img.width - p.triangleSize);
                my = p.map(this.y, 0, p.height, 0, p.img.height - p.triangleHeight);
                p.imgCopy.copy(img, mx, my, p.triangleSize, p.triangleSize, 0, 0, p.triangleSize, p.triangleSize);
                p.imgCopy.mask(p.cacheTriangle);
            };
        };

        p.windowResized = function() {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
            p.initSetup();
        };

        p.initTriangles = function() {
            var h, i;
            h = 0;
            while (h < p.ceil(p.height / p.triangleHeight / 2)) {
                i = 0;
                while (i < p.ceil(p.width / p.triangleSize / 3)) {
                    p.triangles[++p.j] = new p.kTriangle(0 + 3 * p.triangleSize * i, 0 + 2 * p.triangleHeight * h, p.PI / 3, -1, 1);
                    p.triangles[++p.j] = new p.kTriangle(0 + 3 * p.triangleSize * i, 0 + 2 * p.triangleHeight * h, 0, 1, 1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 / 2 + 3 * p.triangleSize * i, p.triangleHeight + 2 * p.triangleHeight * h, -p.PI / 3, -1, 1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 / 2 + 3 * p.triangleSize * i, p.triangleHeight + 2 * p.triangleHeight * h, p.PI / 3, -1, -1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 / 2 + 3 * p.triangleSize * i, p.triangleHeight + 2 * p.triangleHeight * h, 0, 1, -1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 + 3 * p.triangleSize * i, 0 + 2 * p.triangleHeight * h, -p.PI / 3, -1, -1);
                    p.triangles[++p.j] = new p.kTriangle(3 * p.triangleSize + 3 * p.triangleSize * i, 0 + 2 * p.triangleHeight * h, p.PI / 3, -1, 1);
                    p.triangles[++p.j] = new p.kTriangle(0 + 3 * p.triangleSize * i, p.triangleHeight * 2 + 2 * p.triangleHeight * h, p.PI / 3, -1, -1);
                    p.triangles[++p.j] = new p.kTriangle(0 + 3 * p.triangleSize * i, p.triangleHeight * 2 + 2 * p.triangleHeight * h, 0, 1, -1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 / 2 + 3 * p.triangleSize * i, p.triangleHeight + 2 * p.triangleHeight * h, -p.PI / 3, -1, -1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 / 2 + 3 * p.triangleSize * i, p.triangleHeight + 2 * p.triangleHeight * h, p.PI / 3, -1, 1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 / 2 + 3 * p.triangleSize * i, p.triangleHeight + 2 * p.triangleHeight * h, 0, 1, 1);
                    p.triangles[++p.j] = new p.kTriangle(p.triangleSize * 3 + 3 * p.triangleSize * i, p.triangleHeight * 2 + 2 * p.triangleHeight * h, -p.PI / 3, -1, 1);
                    p.triangles[++p.j] = new p.kTriangle(3 * p.triangleSize + 3 * p.triangleSize * i, p.triangleHeight * 2 + 2 * p.triangleHeight * h, p.PI / 3, -1, -1);
                    i++;
                }
                h++;
            }
        };

        p5.Renderer2D._copyHelper = function(srcImage, sx, sy, sw, sh, dx, dy, dw, dh) {
            var s;
            if (srcImage instanceof p5.Image) {
                p.canvas = srcImage.canvas;
            } else if (srcImage instanceof p5.Graphics) {
                srcImage.loadPixels();
                p.canvas = srcImage.elt;
            }
            s = p.canvas.width / srcImage.width;
            this.drawingContext.drawImage(p.canvas, s * sx, s * sy, s * sw, s * sh, dx, dy, dw, dh);
        };
    };

    new p5(kaleidoscope, 'kaleidoscope');
});
