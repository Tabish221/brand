<?php
    if($_POST['action'] === 'submit-mail'){
        // Collect form data
        $name = $_POST['Name'];
        $email = $_POST['Email'];
        $phone = $_POST['Phone'];
        // Set up email content
        $to = "info@testdomain.com";
        $subject = "New form submission";
        $body = "Name: $name \nEmail: $email  \nPhone: $phone ";
        // Send email
        if(mail($to, $subject, $body)){
            echo'<script>window.location.href="./"; </script>';
        } else {
            echo "There was an error sending your message.";
        }
    }
?>