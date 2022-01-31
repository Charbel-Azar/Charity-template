<?php
ini_set('SMTP', "server.com");
ini_set('smtp_port', "25");

         $to = "charbel.azar21@hotmail.com";
         $subject = "This is subject";
         
         $message = $_POST['message'];
      $email=$_POST['email'];
         
         $header = "From:".$email;
         $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }
      ?>