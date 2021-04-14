alert('welcome to our site')
console.log('this is from clean energy')


var username = prompt ('please type your name')
 var userage = prompt ('please type your age ')
 
 document.write('welcome to our site '+ username)
 
 var usertype = prompt('please choose type of energy you want (solar or wind)') 
 if (usertype == 'solar')
 {var image ='<img src="https://cdn.britannica.com/85/162485-050-7670426D/Solar-panel-array-rooftop.jpg" alt="solar" />';
 document.write(image);

 } else if ( usertype =='wind')
 {var image2 ='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR1bQ95eqiomFf-i96CRifbp9Paf4ce1odF9OAesfGrp8CKHy9FrofJUgDZjZKSX2sME&usqp=CAU.jpg" alt="wind" />';
 document.write(image2);}
 
 var userwork = prompt('please type if you want system for (home or project) ')
 if (userwork == 'home')
 {var image3 ='<img src="https://image.made-in-china.com/2f0j00OGvUjPnWwscA/China-1kw-off-Grid-Solar-PV-Panel-Energy-System-Manufacturer.jpg" alt="h" />';
 document.write(image3);

 } else if ( userwork =='project')
 {var image4 ='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6y1aNXQkYcwLaU4hz-Nb-TIBlQ8JAtq-dxQ&usqp=CAU.jpg" alt="p" />';
 document.write(image4);}



 
