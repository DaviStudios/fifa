<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $userEmail = $_POST["email"];
    $userProblem = $_POST["problem"];
    $recipientEmail1 = "davkoagent@seznam.cz"; // Predefined recipient
    $recipientEmail2 = $userEmail; // User-provided recipient
    $subject = "Contact Form Submission";
    
    // Compose the email message
    $message = "Email: " . $userEmail . "\n\n";
    $message .= "Problem:\n" . $userProblem;
    
    // Send the email to both recipients
    $recipients = $recipientEmail1 . ", " . $recipientEmail2;
    $headers = "From: " . $userEmail;
    
    if (mail($recipients, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Email sending failed.";
    }
}
?>
