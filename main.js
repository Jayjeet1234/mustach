nosex=0;
nosey=0;
function preload(){
clown_nose = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA5CAMAAAA7tUSkAAAAaVBMVEX///8AAACysrKAgIDl5eX8/Py1tbU1NTX4+PjHx8fq6up8fHx1dXVqamogICC5ubmZmZnS0tKlpaUNDQ2rq6s+Pj5dXV0bGxuJiYnf399KSkq/v7/w8PDY2NgwMDBlZWUoKChUVFSRkZGfS0kJAAACHklEQVRYhe2Y15aDIBCGgxUriiVRUzTv/5CrwFhSDLsbZy82/0UiHIfvCFOA3e6jjz76K+WBOSg8InNLIuUhc1vFdZC5meImuFhfYUmAy/WAW+ByE+ASG5UbjdwKlSumuNxjO3Qlv9Tsf0NM7nXg7nZM/uEp7nmdiiaGhzUgYwz/LhqWDv5E0v5pWGDCsbgiiLLhSaaPEw72IGDCj20ZwxYClUbzAqgazeZUrgrRWbYhT5fpb0e2K8OM6sLtVdRRkDjNyfKPtk2PfsovY3oEZzpDx9l0Uv9Ih/cqj+WHsCzkIF14cF4uhBcSPUE5YHqvZ8HahLBYk0qM0abQNXGfbYmsWncIUk9WlbYRiejDKdYfgMx3kVzfLPbvscY3sMtEEXzD8s7B0h9jIZFoqb2ZalvftLgPCkffOlpamtqGD6uAH702VFrEk6VpdOYPXXIYQTfw67mVjmsUF76admgTaAXi7INpNnW7QcKNpZjn9SlwjTkO5Kdew27Mc37tZtzZTr8ZO/lG5zuajh6wn3bc0HfYBipVQQmZwlAd7owVqzfIVss/RoQ6ZF23xfZg6UYXaMvMvN8aC6BxAyoze749VxVNaMn8+qBWvF25IEEaELsXlIOstcgc3U04bygRS7D7jLGWV10DAUp8PM6F0OJgI7g4F2DifgLugAT3WYF7r9gsQYm9RouClZlDlQFK2jau199/l049a795Qv7o3+oLvHAWL6Yzco8AAAAASUVORK5CYII=');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
x=ml5.poseNet(video,modelloaded);
x.on('pose',gotposes);
}
function modelloaded(){
console.log("posenetisinitialised");
}
function gotposes(result){
if(result.length>0){
console.log(result);
nosex=result[0].pose.nose.x-5;
nosey=result[0].pose.nose.y-5;
}
}
function snapshot(){
save('play.png');
}
function draw(){
image(video,0,0,300,300)
image(clown_nose,nosex,nosey,30,30);
}