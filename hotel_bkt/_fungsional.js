function _fs1(){
        hapus_menu();
        hapus_Semua();

        var y = [];
        for(i=0;i<$("input[name=fs1_fas]:checked").length;i++){
          y.push($("input[name=fs1_fas]:checked")[i].value);
        }
        var z = document.getElementById('fs1_type').value;
        var min = document.getElementById('fs1_hmin').value;
        var max = document.getElementById('fs1_hmax').value;
        document.getElementById('judul_table').innerHTML="Fungsional Baru";

        if (y.length==0||z==""||min=="") {          
          document.getElementById('modal_title').innerHTML="Info";
          document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
          $('#myModal').modal('show'); 
          return;
        } else {
          $("#view_kanan_table").show();
          $('#kanan_table').empty();            
        }

        $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
        console.log(server+'_fs1.php?min='+min+'&max='+max+'&fas='+y+'&tipe='+z);
        $.ajax({url: server+'_fs1.php?min='+min+'&max='+max+'&fas='+y+'&tipe='+z, data: "", dataType: 'json', success: function(rows){ 
          if(rows == null)
          {
            alert('Data Did Not Exist !');
          }
            for (var i in rows){ 
              var row = rows[i];
              var id = row.id;
              var name = row.name;
              var lng = row.lng;
              var lat = row.lat;
              $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
              console.log(name);
              //MARKER
              centerBaru = new google.maps.LatLng(lat, lng);
              map.setCenter(centerBaru);
              map.setZoom(16);  
              var marker = new google.maps.Marker({
                position: centerBaru,              
                icon:'icon/marker_hotel.png',
                animation: google.maps.Animation.DROP,
                map: map
                });
              markersDua.push(marker);
              klikInfoWindow(id,marker);
            }//end for               
        }});//end ajax 
}

function _fs2(){
        hapus_menu();
        hapus_Semua();

        var y = [];
        for(i=0;i<$("input[name=fs2_fas]:checked").length;i++){
          y.push($("input[name=fs2_fas]:checked")[i].value);
        }
        var z = document.getElementById('fs2_type').value;
        var x = document.getElementById('fs2_category').value;
        document.getElementById('judul_table').innerHTML="Fungsional Baru";

        if (y ==""||z == ""||x == "") {          
          document.getElementById('modal_title').innerHTML="Info";
          document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
          $('#myModal').modal('show'); 
          return;
        } else {
          $("#view_kanan_table").show();
          $('#kanan_table').empty();            
        }

        $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
        console.log(server+'_fs2.php?category='+x+'&fas='+y+'&tipe='+z);
        $.ajax({url: server+'_fs2.php?category='+x+'&fas='+y+'&tipe='+z, data: "", dataType: 'json', success: function(rows){ 
          if(rows == null)
          {
            alert('Data Did Not Exist !');
          }
            for (var i in rows){ 
              var row = rows[i];
              var id = row.id;
              var name = row.name;
              var lng = row.lng;
              var lat = row.lat;
              var id2 = row.id2;
              var name2 = row.name2;
              var lng2 = row.lng2;
              var lat2 = row.lat2;
              $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
              console.log(name);
              //MARKER hotel
              centerBaru = new google.maps.LatLng(lat, lng);
              map.setCenter(centerBaru);
              map.setZoom(16);  
              var marker = new google.maps.Marker({
                position: centerBaru,              
                icon:'icon/marker_hotel.png',
                animation: google.maps.Animation.DROP,
                map: map
                });
              markersDua.push(marker);
              klikInfoWindow(id,marker);
              // Mesjid
              centerMe = new google.maps.LatLng(lat2, lng2);
              // map.setCenter(centerMe);
              map.setZoom(16);  
              var marker2 = new google.maps.Marker({
                position: centerMe,              
                icon:'icon/marker_masjid.png',
                animation: google.maps.Animation.DROP,
                map: map
                });
              markersDua.push(marker2);
              klikInfoWindowMes(id2,marker2);
            }//end for               
        }});//end ajax 
}

function _fs3(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fs3_wisata').value;
  var y = document.getElementById('fs3_type').value;
  var min = document.getElementById('fs3_hmin').value;
  var max = document.getElementById('fs3_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if (y ==""||min == ""||max == ""||x == "") {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fs3.php?tw='+x+'&tipe='+y+'&min='+min+'&max='+max);
  $.ajax({url: server+'_fs3.php?tw='+x+'&tipe='+y+'&min='+min+'&max='+max, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/marker_tw.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowSou(id2,marker2);
      }//end for               
  }});//end ajax 
}

function _fs4(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fs4_category').value;
  var y = document.getElementById('fs4_wisata').value;
  var z = document.getElementById('fs4_type').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if (y ==""||x == ""||z == "") {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fs4.php?tw='+x+'&tipe='+y+'&min='+min+'&max='+max);
  $.ajax({url: server+'_fs4.php?tw='+x+'&tipe='+y+'&min='+min+'&max='+max, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/marker_tw.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowSou(id2,marker2);
      }//end for               
  }});//end ajax 
}

function _fr1(){
  hapus_menu();
  hapus_Semua();

  var y = [];
  for(i=0;i<$("input[name=fr1_fas]:checked").length;i++){
    y.push($("input[name=fr1_fas]:checked")[i].value);
  }
  var z = document.getElementById('fr1_destinasi').value;
  var min = document.getElementById('fr1_hmin').value;
  var max = document.getElementById('fr1_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(min == ""||max == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr1.php?min='+min+'&max='+max+'&fas='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr1.php?min='+min+'&max='+max+'&fas='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
      }//end for               
  }});//end ajax 
}

function _fr2(){
  hapus_menu();
  hapus_Semua();


  var y = document.getElementById('fr2_type').value;
  var z = document.getElementById('fr2_destinasi').value;
  var min = document.getElementById('fr2_hmin').value;
  var max = document.getElementById('fr2_hmax').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(min == ""||max == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr2.php?min='+min+'&max='+max+'&tipe='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr2.php?min='+min+'&max='+max+'&tipe='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
      }//end for               
  }});//end ajax 
}

function _fr3(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fr3_souvenir').value;
  var y = document.getElementById('fr3_type').value;
  var z = document.getElementById('fr3_destinasi').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(x == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr3.php?sou='+x+'&tipe='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr3.php?sou='+x+'&tipe='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/marker_oo.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowSou(id2,marker2);
      }//end for               
  }});//end ajax 
}

function _fr4(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fr4_kuliner').value;
  var y = document.getElementById('fr4_type').value;
  var z = [];
  for(i=0;i<$("input[name=fr4_fas]:checked").length;i++){
    z.push($("input[name=fr4_fas]:checked")[i].value);
  }
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(x == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr4.php?kul='+x+'&tipe='+y+'&fas='+z);
  $.ajax({url: server+'_fr4.php?kul='+x+'&tipe='+y+'&fas='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/marker_kuliner.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowKul(id2,marker2);
      }//end for               
  }});//end ajax 
}

function _fr5(){
  hapus_menu();
  hapus_Semua();

  var x = document.getElementById('fr5_ik').value;
  var y = [];
  for(i=0;i<$("input[name=fr4_fas]:checked").length;i++){
    y.push($("input[name=fr4_fas]:checked")[i].value);
  }
  var z = document.getElementById('fr5_destinasi').value;
  document.getElementById('judul_table').innerHTML="Fungsional Baru";

  if ((y =="")&&(z == "")&&(x == "")) {          
    document.getElementById('modal_title').innerHTML="Info";
    document.getElementById('modal_body').innerHTML="Silahkan isi form terlebih dahulu";
    $('#myModal').modal('show'); 
    return;
  } else {
    $("#view_kanan_table").show();
    $('#kanan_table').empty();            
  }

  $('#kanan_table').append("<tr><th class='centered'>Name</th><th class='centered' colspan='3'>Action</th></tr>");
  console.log(server+'_fr5.php?ik='+x+'&fas='+y+'&destinasi='+z);
  $.ajax({url: server+'_fr5.php?ik='+x+'&fas='+y+'&destinasi='+z, data: "", dataType: 'json', success: function(rows){ 
    if(rows == null)
    {
      alert('Data Did Not Exist !');
    }
      for (var i in rows){ 
        var row = rows[i];
        var id = row.id;
        var name = row.name;
        var lng = row.lng;
        var lat = row.lat;
        var id2 = row.id2;
        var name2 = row.name2;
        var lng2 = row.lng2;
        var lat2 = row.lat2;
        $('#kanan_table').append("<tr><td>"+name+"</td><td><a role='button' class='btn btn-success fa fa-info' onclick='data_hotel_1_info(\""+id+"\")'></a></td><td><a role='button' class='btn btn-danger fa fa-taxi' title='Angkot' onclick='angkot_sekitar(\""+id+"\")'></a></td></tr>");  
        console.log(name);
        //MARKER
        centerBaru = new google.maps.LatLng(lat, lng);
        map.setCenter(centerBaru);
        map.setZoom(16);  
        var marker = new google.maps.Marker({
          position: centerBaru,              
          icon:'icon/marker_hotel.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindow(id,marker);
        //MARKER souvenir
        centerSou = new google.maps.LatLng(lat2, lng2);
        map.setZoom(16);  
        var marker2 = new google.maps.Marker({
          position: centerSou,              
          icon:'icon/ik.png',
          animation: google.maps.Animation.DROP,
          map: map
          });
        markersDua.push(marker);
        klikInfoWindowSM(id2,marker2);
      }//end for               
  }});//end ajax 
}