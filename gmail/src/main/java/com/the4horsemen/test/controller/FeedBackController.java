package com.the4horsemen.test.controller;

import com.the4horsemen.test.model.FeedBack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FeedBackController {
    @Autowired
    public JavaMailSender emailSender;

    @RequestMapping(value = "/email")
    public void sendEmail(@RequestBody FeedBack feedBack) {
        sendSimpleMessage(feedBack.getEmail(), feedBack.getName(),
                feedBack.getFeedback());
    }

    public void sendSimpleMessage(
            String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }
}
